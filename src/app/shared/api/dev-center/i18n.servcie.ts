import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpParams} from '@angular/common/http';
import {ApiPath} from '../api.path';
import {ApiService} from '../api.service';

@Injectable()
export class I18nServcie {

  private I18N_PATH: string = ApiPath.getApiPath(ApiPath.API_DEV_CENTER_PATH);

  private POST_LOCALE: string = this.I18N_PATH + '/i18n/locale';//新建语言地区
  private GET_LOCALE_ID: string = this.I18N_PATH + '/i18n/locale/{id}';//查询语言地区
  private PUT_LOCALE_ID: string = this.I18N_PATH + '/i18n/locale/{id}';//修改语言地区
  private GET_LOCALES: string = this.I18N_PATH + '/i18n/locales';//查询语言地区

  private POST_NODE: string = this.I18N_PATH + '/i18n/node';//新建一个节点
  private PUT_NODE_ID: string = this.I18N_PATH + '/i18n/node/{id}';//修改一个节点
  private DELETE_NODE_ID: string = this.I18N_PATH + '/i18n/node/{id}';//删除一个节点
  private GET_NODES_MAP: string = this.I18N_PATH + '/i18n/nodes/map';//根据整个系统查询
  private GET_NODES_TREE: string = this.I18N_PATH + '/i18n/nodes/tree';//

  private POST_VALUE: string = this.I18N_PATH + '/i18n/value';//新增该节点的对应的值
  private GET_VALUE_NODEID: string = this.I18N_PATH + '/i18n/value/{nodeId}';//根据一个属性节点ID查询
  private PUT_VALUE_NODEID: string = this.I18N_PATH + '/i18n/value/{nodeId}';//修改该节点的对应的值
  private GET_VALUES: string = this.I18N_PATH + '/i18n/values';//查询系统的国际化字典
  private GET_VALUES_JSON: string = this.I18N_PATH + '/i18n/values/json';//查询系统的国际化字典


  private PATH_ID: string = '{id}';
  private PATH_SYSTEM_ID: string = '{systemId}';
  private PATH_NODE_ID: string = '{nodeId}';

  constructor(private api: ApiService) {
  }

  public getLocales(systemId: number): Observable<any> {
    let url = this.GET_LOCALES;
    let params: HttpParams = new HttpParams();
    params = params.set('systemId', systemId.toString());
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }


  public addNode(node: any): Observable<any> {
    let url = this.POST_NODE;
    return Observable.create((observer) => {
      this.api.post(url, node).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public updateNode(id: string, node: any): Observable<any> {
    let url = this.PUT_NODE_ID.replace(this.PATH_ID, id);
    return Observable.create((observer) => {
      this.api.put(url, '', node).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public deleteNode(id: string): Observable<any> {
    let url = this.DELETE_NODE_ID.replace(this.PATH_ID, id);
    return Observable.create((observer) => {
      this.api.delete(url).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }


  public getNodesMap(systemId: number, nodeName?: string): Observable<any> {
    let url = this.GET_NODES_MAP;
    let params: HttpParams = new HttpParams();
    params = params.set('systemId', systemId.toString());
    if (nodeName) params = params.set('nodeName', nodeName);
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public getNodesTree(systemId: number, nodeName?: string): Observable<any> {
    let url = this.GET_NODES_TREE;
    let params: HttpParams = new HttpParams();
    params = params.set('systemId', systemId.toString());
    if (nodeName) params = params.set('nodeName', nodeName);
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public addValue(value: any): Observable<any> {
    let url = this.POST_VALUE;
    return Observable.create((observer) => {
      this.api.post(url, value).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public updateValue(nodeId: string, localeId: number, value: string): Observable<any> {
    let url = this.PUT_VALUE_NODEID.replace(this.PATH_NODE_ID, nodeId);
    let params: HttpParams = new HttpParams();
    params = params.set('localeId', localeId.toString());
    return Observable.create((observer) => {
      this.api.put(url, params, value).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public getValue(nodeId: string, localeId?: number): Observable<any> {
    let url = this.GET_VALUE_NODEID.replace(this.PATH_NODE_ID, nodeId);
    let params: HttpParams = new HttpParams();
    if (localeId) params = params.set('localeId', localeId.toString());
    return Observable.create((observer) => {
      this.api.get(url, params).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public getValues(systemId: number, lang: string, nodeName: string): Observable<any> {
    let url = this.GET_VALUES;
    let params: HttpParams = new HttpParams();
    params = params.set('systemId', systemId.toString());
    params = params.set('lang', lang);
    if (nodeName) params = params.set('nodeName', nodeName);
    return Observable.create((observer) => {
      this.api.get(url).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

  public getValuesJson(systemId: number, lang: string, nodeName: string): Observable<any> {
    let url = this.GET_VALUES_JSON;
    let params: HttpParams = new HttpParams();
    params = params.set('systemId', systemId.toString());
    params = params.set('lang', lang);
    if (nodeName) params = params.set('nodeName', nodeName);
    return Observable.create((observer) => {
      this.api.get(url).subscribe((res) => {
        observer.next(res);
        observer.complete();
      });
    });
  }

}
