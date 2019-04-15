/**
 * Api路径管理对象
 */

export class ApiPath {

  static ROOT_PATH: string = ""; // 根目录的路径
  static API_PATH: string = "/api/";

  static C_AUTH_TOKEN: string = 'C-Auth-Token';//全局的token属性

  static API_DEV_CENTER_PATH: string = 'goat/devcenter';//开发者中心

  constructor() {
  }

  static getApiPath(path: string): string {
    var urls = (window.location + '').split('/');
    if (urls.length > 3) {
      if (urls[3] == ApiPath.ROOT_PATH) {
        ApiPath.API_PATH = '/' + ApiPath.ROOT_PATH + "/";
      }
    }
    return ApiPath.API_PATH + path;
  }

  //is deploy model
  static isDeployModel(): boolean {
    var urls = (window.location + '').split('/');
    if (urls.length > 3) {
      if (urls[3] == ApiPath.ROOT_PATH) {
        return true;
      }
    }
    return false;
  }
}

