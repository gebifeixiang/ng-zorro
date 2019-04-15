import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoI18nComponent} from './demo-i18n.component';

const routes: Routes = [
  {
    path: '',
    component: DemoI18nComponent,
    data: {
      title: '国际化Demo测试',
      icon: 'ti-user',
      caption: '',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoI18nRoutingModule {
}
