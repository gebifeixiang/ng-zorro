import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },
  {
    path: 'default',
    loadChildren: './theme/default/default.module#DefaultModule'
  },
  {
    path: 'demos',
    loadChildren: './theme/demos/demos.module#DemosModule'
  }, {
    path: 'dev-center',
    loadChildren: './theme/dev-center/dev-center.module#DevCenterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
