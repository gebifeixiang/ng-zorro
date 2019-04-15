import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevCenterComponent} from './dev-center.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DevCenterComponent,
    data: {
      title: '',
      status: false,
    },
    children: [
      {
        path: 'default',
        loadChildren: './default/default.module#DefaultModule'
      },
      {
        path: 'system',
        loadChildren: './system/system.module#SystemModule'
      },
      {
        path: 'help',
        loadChildren: './help/help.module#DevCenterHelpModule'
      },
      {
        path: 'service',
        loadChildren: './service/service.module#DevCenterServiceModule'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevCenterRoutingModule {

}
