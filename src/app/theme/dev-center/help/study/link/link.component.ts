import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'study-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})


export class LinkComponent implements OnInit {

  links = [
    {
      href: 'https://www.jianshu.com/p/19bd92ba952a',
      remark: '[NodeJS] 优缺点及适用场景讨论'
    },
    {
      href: 'https://blog.csdn.net/xupeng874395012/article/details/68946676/',
      remark: 'swagger注释API详细说明'
    },
    {
      href: 'https://www.cnblogs.com/winner-0715/p/6666579.html',
      remark: 'SpringBoot项目在IntelliJ IDEA中实现热部署'
    },
    {
      href: 'https://blog.csdn.net/m0_37263637/article/details/80328505',
      remark: 'Nodejs log方案(log4js)'
    },
    {
      href: 'https://www.cnblogs.com/liuqi/p/6483317.html',
      remark: '在Linux系统安装Nodejs 最简单步骤'
    }, {
      href: 'https://www.jianshu.com/p/0f5332f2bbf8',
      remark: 'ng-template、ng-content、ng-container'
    }
  ];

  constructor() {

  }


  ngOnInit() {
  }


}
