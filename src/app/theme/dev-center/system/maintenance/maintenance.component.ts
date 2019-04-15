import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NzFormatEmitEvent, NzMessageService, NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SystemServcie} from '../../../../shared/api/index';
import {ApiResult, SystemBase, SystemMaintenance} from '../../../../shared/model/index';

@Component({
  selector: 'dev-center-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})


export class MaintenanceComponent implements OnInit, OnDestroy {

  public systemId: number;
  public systembase: SystemBase = null;

  public maintenances: SystemMaintenance[] = [];
  public addVisible = false;
  public validateForm: FormGroup;
  public addsm: SystemMaintenance = new SystemMaintenance();
  timer: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private msg: NzMessageService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private systemServcie: SystemServcie) {

  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.systemId = params['systemId'];
      if (this.systemId) {
        this.systemServcie.getSystemBaseById(this.systemId).subscribe((res: ApiResult) => {
          if (res.status === 'OK') {
            this.systembase = res.result.data;
            this.querySystemMaintenance();
          } else {

          }
        });
      }

    });

    // this.timer = setInterval(() => {
    //   this.querySystemMaintenance();
    // }, 10000);


    this.validateForm = this.fb.group({
      systemId: 0,
      title: '',
      content: '',
      location: '',
      creater: '',
      rangePickerTime: [[]],
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  nzEvent(event: NzFormatEmitEvent): void {

  }


  public addOpen() {
    this.addVisible = true;
  }

  public addClose() {
    this.addVisible = false;
  }


  public submitForm() {
    this.addsm.location = this.validateForm.value.location;
    this.addsm.title = this.validateForm.value.title;
    this.addsm.content = this.validateForm.value.content;
    this.addsm.systemId = this.systemId;
    this.addsm.beginTime = this.validateForm.value.rangePickerTime[0];
    this.addsm.endTime = this.validateForm.value.rangePickerTime[1];
    this.addsm.creater = this.validateForm.value.creater;

    if (this.addsm.location && this.addsm.location.indexOf('/') !== 0) {
      this.addsm.location = '/' + this.addsm.location;
    }
    if (this.validationMaintenance(this.addsm)) {
      this.systemServcie.addSystemMaintenance(this.addsm).subscribe((res: ApiResult) => {
        if (res.status === 'OK') {
          this.addsm = new SystemMaintenance();
          this.addVisible = false;
          this.notification.create('success', '成功', '成功的创建了一个系统维护记录');
          this.querySystemMaintenance();
        } else {
          this.notification.create('error', '失败', res.result.msg);
        }
      });
    }
  }

  // 结束
  public endMaintenanceConfirm(sm: SystemMaintenance) {
    this.systemServcie.updateSystemMaintenanceStatus(sm.id, 'FINISH').subscribe((res: ApiResult) => {
      if (res.status === 'OK') {
        sm.status = 2;
        this.notification.create('success', '成功', '该条系统维护记录已经成功结束');
      } else {
        this.notification.create('error', '失败', res.result.msg);
      }
    });
  }


  private querySystemMaintenance() {
    this.systemServcie.getSystemMaintenances(this.systembase.id).subscribe((res: ApiResult) => {
      if (res.status === 'OK') {
        this.maintenances = res.result.data;
      } else {

      }
    });
  }


  private validationMaintenance(sm: SystemMaintenance): boolean {
    if (!sm.location || !sm.title || !sm.content || !sm.systemId || !sm.beginTime || !sm.endTime || !sm.creater) {
      this.notification.create('warning', '提示', '所有信息都不能为空');
      return false;
    }
    return true;
  }

}
