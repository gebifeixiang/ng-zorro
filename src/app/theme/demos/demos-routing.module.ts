import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemosComponent} from './demos.component';

const routes: Routes = [
  {
    path: '',
    component: DemosComponent,
    data: {
      title: '',
      status: false,
    },
    children: [
      {
        path: 'zorro',
        loadChildren: './zorro/zorro.module#ZorroModule'
      },
      {
        path: 'i18n',
        loadChildren: './i18n/demo-i18n.module#DemoI18nModule'
      },
    ]
  },
  {
    path: 'theme',
    loadChildren: './theme/demo-theme.module#DemoThemeModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule {

}
