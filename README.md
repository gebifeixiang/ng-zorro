# ng-zorro框架

## 版本
>>1.1.0

## 描述
>>该框架基于[Angular](https://www.angular.cn) 和组件[ng-zorro](https://ng.ant.design)

## 说明
>>1.可以通过[clio-cli](https://www.npmjs.com/package/clio-cli)脚手架自动构建该框架<br>
>>2.
  
## 开发

### 1. 工程结构

```bash
e2e                   
nodel_modeules            #插件库
src/app                   
src/app/shared            #公共模块：自定义公共组件、model、service、function等
src/app/theme             #业务开发模块
src/assets                #静态文件：json文件、图片等
src/scss                  #自定义的scss文件
angular.json              #anuglar的配置文件
package.json              #包管理文件
proxy.conf.json           #后台API接口的代理配置
```
### 2. 代理配置
在工程根目录下载创建 proxy.conf.json 文件 , 参考如下配置：
```bash
前端请求 http://127.0.0.1:4200/api/users 实际请求 http://api.***.com/users
```

```bash
{
  "/api/": {
    "target": "http://api.***.com",
    "pathRewrite": {
      "^/api/": "/"
    },
    "secure": false,
    "changeOrigin": true
  }
}
```
