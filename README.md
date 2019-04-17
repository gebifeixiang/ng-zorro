# ng-zorro框架

## >>版本
  1.1.0

## >>描述
  该框架基于[Angular](https://www.angular.cn) 和组件[ng-zorro](https://ng.ant.design)

## >>说明
  1.可以通过[clio-cli](https://www.npmjs.com/package/clio-cli)脚手架自动构建该框架<br>
  2.
  
## 开发
### 1. 代理配置
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
