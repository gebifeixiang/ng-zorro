import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemosDefaultComponent} from './default/demos-default.component';
import {DemosI18nComponent} from './i18n/demos-i18n.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DemosDefaultComponent,
  },
  {
    path: 'i18n',
    component: DemosI18nComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule {

}
