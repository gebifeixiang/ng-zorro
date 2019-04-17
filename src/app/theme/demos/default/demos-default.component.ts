import {Component} from '@angular/core';

@Component({
  selector: 'app-demos-default',
  templateUrl: './demos-default.component.html',
  styleUrls: ['./demos-default.component.scss']
})
export class DemosDefaultComponent {

  public links = [
    {
      name: 'GitHup',
      link: 'https://github.com/jiazhou3017/ng-zorro'
    },
    {
      name: 'Angular',
      link: 'https://www.angular.cn'
    }, {
      name: 'ng-zorro',
      link: 'https://ng.ant.design'
    }, {
      name: 'clio-cli',
      link: 'https://www.npmjs.com/package/clio-cli'
    }
  ];

  public demos = [
    {
      name: '国际化案例',
      link: '/demos/i18n'
    }
  ];

}
