/**
 *  Created by S0090 on 2018/6/20
 *
 *JSON接口的统一调用 服务
 */
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class JsonService {


  constructor(public http: HttpClient) {
  }

  getJson(url: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options: any = {
      headers: headers,
    };

    return Observable.create((observer) => {
      this.http.get(url, options).subscribe((res) => {
        observer.next(res);
        observer.complete();
        observer.error((err) => {
          this.handleError(err);
        });
      });
    });
  }

  handleError(err) {
    alert(err);
  }
}
