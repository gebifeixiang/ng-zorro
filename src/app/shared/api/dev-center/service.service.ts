import {Injectable} from "@angular/core";
import {ApiPath} from "../api.path";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ApiService} from "../api.service";
import {ApiResult} from '../result.model';

@Injectable()
export class ServiceServcie {

  private SERVICE_PATH: string = ApiPath.getApiPath(ApiPath.API_DEV_CENTER_PATH);

  private GET_EUREKA_INSTANCES: string = this.SERVICE_PATH + '/service/eureka/instances';//查询注册中心所有实例
  private GET_EUREKA_APPLICATIONS: string = this.SERVICE_PATH + '/service/eureka/applicatios';//查询注册中心所有服务
  private GET_SERIVCE_INFOS: string = this.SERVICE_PATH + '/service/infos';//查询所有服务
  private GET_SERIVCE_INFO_MONITORS: string = this.SERVICE_PATH + '/service/monitors';//查询所有服务
  private GET_SERVICE_INSTANCES: string = this.SERVICE_PATH + '/service/instances';//查询所有实例
  private PUT_SERVICE_INSTANCE_CONFIG_REFRESH: string = this.SERVICE_PATH + '/service/instance/config/refresh';


  constructor(private api: ApiService) {
  }


  getEurekaInstances(): Observable<ApiResult> {
    let url = this.GET_EUREKA_INSTANCES;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(this.parseApiResult(res));
        observer.complete();
      });
    });
  }

  getEurekApplications(): Observable<ApiResult> {
    let url = this.GET_EUREKA_APPLICATIONS;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(this.parseApiResult(res));
        observer.complete();
      });
    });
  }


  getServiceInfos(): Observable<ApiResult> {
    let url = this.GET_SERIVCE_INFOS;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(this.parseApiResult(res));
        observer.complete();
      });
    });
  }


  getServiceInstances(): Observable<ApiResult> {
    let url = this.GET_SERVICE_INSTANCES;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(this.parseApiResult(res));
        observer.complete();
      });
    });
  }

  getServiceMonitors(): Observable<ApiResult> {
    let url = this.GET_SERIVCE_INFO_MONITORS;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(this.parseApiResult(res));
        observer.complete();
      });
    });
  }

  refreshServiceInstanceConfig(body: any): Observable<ApiResult> {
    let url = this.PUT_SERVICE_INSTANCE_CONFIG_REFRESH;
    let params: HttpParams = new HttpParams();
    return Observable.create((observer) => {
      this.api.put(url, body, params).subscribe((res) => {
        observer.next(this.parseApiResult(res));
        observer.complete();
      });
    });
  }


  private parseApiResult(json: any): ApiResult {
    return ApiResult.parse(json);
  }

}



