import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SystemServcie} from '../../../../shared/api/index';
import {ApiResult, SystemBase} from '../../../../shared/model/index';

@Component({
  selector: 'system-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public systemId: number;
  public systembase: SystemBase = null;

  systemName: string;

  data = [
    {
      title: '国际化',
      content: '国际化配置说明，暂时没有',
      url: '/dev-center/system/i18n'
    },
    {
      title: '系统维护',
      content: '系统维护配置说明，暂时没有',
      url: '/dev-center/system/maintenance'
    }
  ];

  dataSet = [
    {
      address: '10.28.84.207',
      num: 2,
      serverNames: 'Nginx ; Node',
    },
    {
      address: '10.28.84.206',
      num: 3,
      serverNames: '工作流 ; 申请易 ; 文件服务',
    },
    {
      address: '10.28.84.222',
      num: 2,
      serverNames: '数据库 ; Redis',
    },
  ];

  syslinks = [
    {name: '團險客戶專頁PC端', desc: 'SIT', url: 'http://10.6.6.213:8002/gpm/ilife/gpm-cs-pc/login'},
    {name: '團險客戶專頁Mobile端', desc: 'SIT', url: 'http://10.6.6.213:8002/web-gm/ilife/group-medical/user/login'},
    {name: '开发者中心系统（内网）', desc: 'SIT', url: 'http://10.6.1.121:8003/dev-center/default'},
    {name: '申请易', desc: 'UAT', url: 'http://10.6.1.101/web/agent/e-request/login'}
  ]

  constructor(private router: Router,
              private route: ActivatedRoute,
              private systemServcie: SystemServcie) {

  }

  public ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.systemId = params['systemId'];
      if (this.systemId) {
        this.systemServcie.getSystemBaseById(this.systemId).subscribe((res: ApiResult) => {
          if (res.status === 'OK') {
            this.systembase = res.result.data;
          } else {

          }
        });
      }

    });
  }


  public onClickLink(item: any) {
    this.router.navigate([item.url], {queryParams: {systemId: this.systemId}});
  }


}
