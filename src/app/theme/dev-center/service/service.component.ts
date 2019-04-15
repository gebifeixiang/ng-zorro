import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NzNotificationService} from 'ng-zorro-antd';
import {ServiceServcie} from '../../../shared/api/index';

@Component({
  selector: 'dev-center-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})


export class DevCenterServiceComponent implements OnInit {


  public service: Service = new Service();
  public serviceData: ServiceData = new ServiceData();
  public type: 'service' | 'instance';
  public config: ServiceConfig = new ServiceConfig().init();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private notification: NzNotificationService,
              private serviceServcie: ServiceServcie) {
  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let t = params['type'];
      if (t === 'service') {
        this.type = 'service';
      } else if (t === 'instance') {
        this.type = 'instance';
      } else {
        this.type = 'instance';
      }
      this.init();
    });
  }

  onChangeType(event: any) {
    this.router.navigate(['/dev-center/service'], {queryParams: {type: event}});
  }

  public clickRefreshServiceInfos() {
    this.service.serviceLoading = true;
    this.init();
    setTimeout(() => {
      this.service.serviceLoading = false;
    }, 2000);
  }


  public clickRefreshServiceInstances() {
    this.service.instanceLoading = true;
    this.init();
    setTimeout(() => {
      this.service.instanceLoading = false;
    }, 2000);
  }

  public clickUpServiceinstance() {
    this.notification.create(
      "warning",
      '提醒',
      '此功能暂未开发'
    );
  }

  public clickDownServiceinstance() {
    this.notification.create(
      "warning",
      '提醒',
      '此功能暂未开发'
    );
  }

  public clickRefreshServiceInstanceConfig(instance: ServiceInstanceDetails) {
    this.config.init();
    this.service.selecedInstance = instance;
    this.config.visible = true;
  }

  public clickServiceInstanceConfigOK() {
    let types = [];
    this.config.lists.forEach((res) => {
      if (res.checked) {
        types.push(res.value)
      }
    });
    if (types.length === 0) {
      this.notification.create(
        "warning",
        '提醒',
        '请选择刷新项'
      );
      return;
    }
    let body = {
      types: types,
      host: this.service.selecedInstance.host,
      port: this.service.selecedInstance.port,
    };

    this.config.isOkLoading = true;
    this.config.result = null;
    this.serviceServcie.refreshServiceInstanceConfig(body).subscribe((res) => {
      if (res.isOK()) {
        let data = res.getData();
        this.config.result = data;
      } else {
        this.notification.create(
          "error",
          '提示',
          '刷新失败，' + res.getMSg()
        );
      }
      this.config.refreshConfig();
    });


  }

  public closeServiceInstanceConfig() {
    this.config.init();
  }


  private init() {
    this.queryServiceInfos();
  }


  private queryServiceInfos() {
    this.serviceServcie.getServiceInfos().subscribe((res) => {
        if (res.isOK()) {
          let data = res.getData();
          this.serviceData.infos = data.records;
          this.queryServiceInstances();
        } else {

        }
      }
    )
  }

  private queryServiceInstances() {
    this.serviceServcie.getServiceInstances().subscribe((res) => {
      if (res.isOK()) {
        let data = res.getData();
        this.serviceData.instances = data.records;
        this.querySerivceMonitorConfigs();
      } else {

      }
    })
  }

  private querySerivceMonitorConfigs() {
    this.serviceServcie.getServiceMonitors().subscribe((res) => {
      if (res.isOK()) {
        let data = res.getData();
        this.serviceData.monitors = data.records;
        this.queryEurekaApplications();
      } else {

      }
    })
  }

  private queryEurekaApplications() {
    this.serviceServcie.getEurekApplications().subscribe((res) => {
      if (res.isOK()) {
        let data = res.getData();
        this.serviceData.eurekaApplications = data;
        this.queryEurekaInstances();
      } else {

      }
    })
  }

  private queryEurekaInstances() {
    this.serviceServcie.getEurekaInstances().subscribe((res) => {
      if (res.isOK()) {
        let data = res.getData();
        this.serviceData.eurekaInstances = data;
        this.setService();
      } else {

      }
    })
  }


  private setService() {
    //服务
    this.service.serviceSize = 0;
    this.service.registerServiceSize = 0;
    this.service.instanceSize = 0;
    this.service.monitorInstanceSize = 0;
    this.service.services = [];
    this.service.instances = [];

    for (let i = 0; i < this.serviceData.eurekaApplications.length; i++) {
      let application = this.serviceData.eurekaApplications[i];
      let info = this.serviceData.getServiceInfoByServiceName(application.name);
      let si = new ServiceInfoDetails();
      if (info) {
        si.name = info.name;
        si.comment = info.comment;
        si.createdDate = info.createdDate;
        si.createdBy = info.createdBy;
        si.updatedDate = info.updatedDate;
        si.updatedBy = info.updatedBy;
        let monitor = this.serviceData.getMonitorByServiceId(info.id);
        si.serviceOwner = monitor ? monitor.serviceOwner : "";
        si.isRegister = true
        this.service.registerServiceSize += 1;
      } else {
        si.name = application.name;
        si.isRegister = false
      }
      if (si.isRegister) {
        this.service.services.push(si);
      } else {
        this.service.services.unshift(si);
      }

    }

    //实例
    for (let i = 0; i < this.serviceData.eurekaInstances.length; i++) {
      let instance = this.serviceData.eurekaInstances[i];
      let sid = new ServiceInstanceDetails();
      let info = this.serviceData.getServiceInfoByServiceName(instance.app);
      let monitor = info ? this.serviceData.getMonitorByServiceId(info.id) : null;
      if (info) {
        sid.serviceId = info.id;
        sid.serviceName = info.name;
        sid.serviceComment = info.comment;
      } else {
        sid.serviceName = instance.app;
      }
      sid.status = instance.status;
      sid.host = instance['ipAddr'];
      sid.port = instance['metadata']['management.port'];
      sid.homePageUrl = instance.homePageUrl;
      sid.leaseInfo = instance.leaseInfo;
      sid.isMonitor = monitor ? true : false;
      if (sid.isMonitor) {
        this.service.monitorInstanceSize += 1;
      }
      if (sid.isMonitor) {
        this.service.instances.push(sid);
      } else {
        this.service.instances.unshift(sid);
      }

    }

    this.service.serviceSize = this.service.services.length;
    this.service.instanceSize = this.service.instances.length;
  }


}

export class ServiceData {

  //原数据
  infos: any[];
  instances: any[];
  monitors: any[];
  eurekaApplications: any[];
  eurekaInstances: any[];

  constructor() {
    this.infos = [];
    this.instances = [];
    this.monitors = [];
    this.eurekaApplications = [];
    this.eurekaInstances = [];
  }


  //根据ServiceId查找监控对象
  getMonitorByServiceId(serviceId: number): any {
    for (let i = 0; i < this.monitors.length; i++) {
      if (this.monitors[i].serviceId === serviceId) {
        return this.monitors[i];
      }
    }
    return null;
  }

  //根据ServiceName查找服务对象
  getServiceInfoByServiceName(name: string): any {
    for (let i = 0; i < this.infos.length; i++) {
      if (this.infos[i].name === name) {
        return this.infos[i];
      }
    }
    return null;
  }

}

export class Service {

  serviceSize: number;
  registerServiceSize: number;
  instanceSize: number;
  monitorInstanceSize: number;
  serviceLoading: boolean;
  instanceLoading: boolean;
  services: ServiceInfoDetails[];
  instances: ServiceInstanceDetails[];
  selecedInstance: ServiceInstanceDetails;

  constructor() {
    this.serviceSize = 0;
    this.registerServiceSize = 0;
    this.instanceSize = 0;
    this.monitorInstanceSize = 0;
    this.services = [];
    this.instances = [];
    this.serviceLoading = false;
    this.instanceLoading = false;
  }
}

export class ServiceConfig {

  nzOkText: string;
  visible: boolean;
  isOkLoading: boolean;
  lists: any[] = [];
  result: any;
  isRefresh: boolean;

  constructor() {

  }

  init() {
    this.nzOkText = '确定';
    this.isRefresh = false;
    this.visible = false;
    this.isOkLoading = false;
    this.lists = [
      {label: '配置文件', value: 'config', checked: false},
      {label: '国际化缓存', value: 'i18n', checked: false}
    ]
    this.result = null;
    return this;
  }

  refreshConfig() {
    this.isRefresh = true;
    this.isOkLoading = false;
    this.nzOkText = '重新刷新';
  }


}

//服务的列表详情
export class ServiceInfoDetails {
  id: number;
  name: string;
  comment: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  serviceOwner: string;
  isRegister: boolean;
}

export class ServiceInstanceDetails {
  serviceId: number;
  serviceName: string;
  serviceComment: string;
  status: string;
  homePageUrl: string;
  host: string;
  port: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isMonitor: boolean;//是否加入监控
  leaseInfo: any;
}



