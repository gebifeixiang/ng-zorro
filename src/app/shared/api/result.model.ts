export class ApiResult {
  result: ResponseResult;
  status: string;

  static parse(api: any): ApiResult {
    let ar = new ApiResult();
    ar.status = api.status;
    ar.result = api.result;
    return ar;
  }

  isOK(): boolean {
    return this.status === 'OK' ? true : false;
  }

  getResult() {
    return this.result;
  }

  getStatus(): string {
    return this.status;
  }

  getData(): any {
    return this.result.data;
  }

  getMSg(): string {
    return this.result.msg;
  }

  getCode(): string {
    return this.result.code;
  }

  getArgs(): string {
    return this.result.args;
  }

  getI18n(): boolean {
    return this.result.i18n;
  }
}


export class ResponseResult {
  msg: string;
  code: string;
  args: string;
  app: string;
  i18n: boolean;
  data: any;
}
