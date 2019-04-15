import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'details',
    loadChildren: './details/details.module#DetailsModule'
  },
  {
    path: 'i18n',
    loadChildren: './i18n/i18n.module#I18nModule'
  },
  {
    path: 'maintenance',
    loadChildren: './maintenance/maintenance.module#MaintenanceModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
