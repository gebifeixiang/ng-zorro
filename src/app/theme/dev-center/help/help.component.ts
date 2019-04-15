import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'dev-center-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})


export class DevCenterHelpComponent implements OnInit {

  data = [
    {
      title: 'Angular',
      content: 'Angular中文官方文档',
      url: 'https://www.angular.cn/docs',
      type: '',
      target: '_blank'
    },
    {
      title: '前端-PC端',
      content: '基于前端PC端1.1版本',
      url: 'http://www.acloudmeter.com/demos/v2',
      type: '',
      target: '_blank'
    },
    {
      title: '前端-移动端',
      content: '基于ionic的移动端组件库',
      url: 'https://beta.ionicframework.com/docs/components',
      type: '',
      target: '_blank'
    },
    {
      title: '工具-YML',
      content: '在线properties转yaml、yml工具',
      url: 'https://www.bejson.com/devtools/properties2yaml',
      type: '',
      target: '_blank'
    },
    {
      title: 'IDEA',
      content: 'IDEA 的开发快捷键',
      url: '/dev-center/help/study/idea',
      type: 'router',
      target: 'href'
    },
    {
      title: '技术分享链接',
      content: '技术分享链接',
      url: '/dev-center/help/study/link',
      type: 'router',
      target: 'href'
    }
  ];


  constructor(private router: Router,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
  }

  onClickLink(link: any) {
    if (link.target === 'href') {
      this.router.navigateByUrl(link.url);
    } else {
      window.open(link.url);
    }

  }

}
