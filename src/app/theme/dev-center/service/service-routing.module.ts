import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevCenterServiceComponent} from './service.component';

const routes: Routes = [
  {
    path: '',
    component: DevCenterServiceComponent,
    data: {
      title: '',
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
export class DevCenterServiceRoutingModule {
}
