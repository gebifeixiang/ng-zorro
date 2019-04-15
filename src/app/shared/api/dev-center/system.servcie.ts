import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpParams} from '@angular/common/http';
import {ApiPath} from '../api.path';
import {ApiService} from '../api.service';
import {SystemBase, SystemMaintenance} from '../../model/index';

@Injectable()
export class SystemServcie {

  private SYSTEM_PATH: string = ApiPath.getApiPath(ApiPath.API_DEV_CENTER_PATH);

  /**
   * 系统基础信息接口
   */
  private POST_SYSTEM_BASE: string = this.SYSTEM_PATH + '/system/base';// 新增系统
  private PUT_SYSTEM_BASE_ID: string = this.SYSTEM_PATH + '/system/base/{id}';//修改系统信息
  private GET_SYSTEM_BASES_ID: string = this.SYSTEM_PATH + '/system/base/{id}';//查询单个系统信息
  private GET_SYSTEM_BASES: string = this.SYSTEM_PATH + '/system/bases';//查询系统列表


  /**
   * 系统的维护接口
   */
  private POST_SYSTEM_MAINTENANCE: string = this.SYSTEM_PATH + '/system/maintenance';//新增系统维护
  private GET_SYSTEM_MAINTENANCES: string = this.SYSTEM_PATH + '/system/maintenances'; //查询系统维护列表
  private PUT_SYSTEM_MAINTENANCE_ID_STATUS: string = this.SYSTEM_PATH + '/system/maintenance/{id}/status'; //修改系统维护状态
  private PUT_SYSTEM_MAINTENANCE_ID: string = this.SYSTEM_PATH + '/system/maintenance/{id}'; //修改系统维护

  private PATH_ID: string = '{id}';

  constructor(private api: ApiService) {

  }

  addSystemBase(sb: SystemBase) {
    let url = this.POST_SYSTEM_BASE;
    return Observable.create((observer) => {
      this.api.post(url, sb).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  updateSystemBase(sb: SystemBase) {
    let url = this.PUT_SYSTEM_BASE_ID;
    return Observable.create((observer) => {
      this.api.put(url, sb).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }


  getSystemBases() {
    let url = this.GET_SYSTEM_BASES;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  getSystemBaseById(id: number) {
    let url = this.GET_SYSTEM_BASES_ID.replace(this.PATH_ID, id.toString());
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }


  addSystemMaintenance(sm: SystemMaintenance): Observable<any> {
    let url = this.POST_SYSTEM_MAINTENANCE;
    return Observable.create((observer) => {
      this.api.post(url, sm).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  getSystemMaintenances(systemId?: number): Observable<any> {
    let url = this.GET_SYSTEM_MAINTENANCES;
    let params: HttpParams = new HttpParams();
    if (systemId > 0) params = params.set('systemId', systemId.toString());
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  updateSystemMaintenance(id: string, sm: SystemMaintenance): Observable<any> {
    let url = this.PUT_SYSTEM_MAINTENANCE_ID.replace(this.PATH_ID, id);
    return Observable.create((observer) => {
      this.api.put(url, sm).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  updateSystemMaintenanceStatus(id: string, status: 'WAIT' | 'FINISH' | 'RUNNING'): Observable<any> {
    let url = this.PUT_SYSTEM_MAINTENANCE_ID_STATUS.replace(this.PATH_ID, id);
    let hp = new HttpParams();
    hp = hp.set('status', status);
    return Observable.create((observer) => {
      this.api.put(url, '', hp).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

}
