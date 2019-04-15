import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaintenanceComponent} from './maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
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
export class MaintenanceRoutingModule {
}
