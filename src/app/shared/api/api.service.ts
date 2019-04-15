/**
 * Api接口的统一调用 服务
 */
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ApiService {

    private options: any = {};

    constructor(public http: HttpClient) {
    }


    public setOptions(options: any) {
        this.options = options;
    }

    private getOptions(hp?: string | HttpParams): any {
        let headers: HttpHeaders = null;
        let params = (hp) ? hp : ''
        if (!this.options || !this.options.headers) {
            headers = new HttpHeaders();
        } else {
            headers = this.options.headers;
        }
        this.options.params = params;
        return this.options;
    }
    
    post(url: string, body: any, params?: string | HttpParams): Observable<any> {
        let options = this.getOptions(params);

        return Observable.create((observer) => {
            this.http.post(url, body, options).subscribe((res) => {
                observer.next(this.extractData(res));
                observer.complete();
                observer.error((err) => {
                    this.handleError(err);
                });
            });
        });
    }

    delete(url: string, params?: string | HttpParams): Observable<any> {
        let options = this.getOptions(params);
        return Observable.create((observer) => {
            this.http.delete(url, options).subscribe((res) => {
                observer.next(this.extractData(res));
                observer.complete();
                observer.error((err) => {
                    this.handleError(err);
                });
            });
        });
    }

    deleteBody(url: string, body: any, params?: string | HttpParams): Observable<any> {
        let options = this.getOptions(params);
        return Observable.create((observer) => {
            this.http.delete(url, options).subscribe((res) => {
                observer.next(this.extractData(res));
                observer.complete();
                observer.error((err) => {
                    this.handleError(err);
                });
            });
        });
    }

    put(url: string, body: any, params?: string | HttpParams): Observable<any> {
        let options = this.getOptions(params);
        return Observable.create((observer) => {
            this.http.put(url, body, options).subscribe((res) => {
                observer.next(this.extractData(res));
                observer.complete();
                observer.error((err) => {
                    this.handleError(err);
                });
            });
        });
    }

    get(url: string, params?: string | HttpParams): Observable<any> {
        let options = this.getOptions(params);
        return Observable.create((observer) => {
            this.http.get(url, options).subscribe((res) => {
                observer.next(this.extractData(res));
                observer.complete();
                observer.error((err) => {
                    this.handleError(err);
                });
            });
        });
    }

    private extractData(res: Object): any {
        return res;
    }

    private handleError(error: HttpErrorResponse) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status}-${error.statusText}` : `Server error`;
        let msg = `${error.status}   ${error.statusText}`;
        alert('Server error , ' + msg);
        return Observable.throw(errMsg);
    }

    private getHttpHeaders(): HttpHeaders {
        var token = sessionStorage.token;
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        if (token) headers = headers.set('C-Auth-Token', token);
        return headers;
    }
}
