import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {SystemServcie} from '../../../shared/api/index';
import {SystemBase} from '../../../shared/model/index';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public editVisible: boolean = false;
  public systembases: SystemBase[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private modalService: NzModalService,
              private systemServcie: SystemServcie) {

  }


  public ngOnInit() {
    this.systemServcie.getSystemBases().subscribe((res) => {
      if (res.status === 'OK') {
        this.systembases = res.result.data;
      } else {

      }
    });
  }

  public onClickSetting(item: System) {
    this.modalService.warning({
      nzTitle: item.title + '设置',
      nzContent: '<p>功能正在开发中......敬请期待</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  public onClickEdit(item: System) {
    this.editVisible = true;
  }

  public editDrawerClose() {
    this.editVisible = false;
  }

  public onClickEllipsis(item: System) {
    this.router.navigate(['/dev-center/system/details'], {queryParams: {systemId: item.id}});
  }

  public onClickLogo(item: System) {
    this.router.navigate(['/dev-center/system/details'], {queryParams: {systemId: item.id}});
  }


}


export class System {
  id: number;
  url: string;
  domain: string;
  admin: string;
  logo: string;
  avatar: string;
  title: string;
  descript: string;
}
