import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevCenterHelpComponent} from './help.component';

const routes: Routes = [
  {
    path: '',
    component: DevCenterHelpComponent,
    data: {
      title: '',
      icon: 'ti-user',
      caption: '',
      status: false
    }
  },
  {
    path: 'study',
    loadChildren: './study/study.module#StudyModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevCenterHelpRoutingModule {
}
