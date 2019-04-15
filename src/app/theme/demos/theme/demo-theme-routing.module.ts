import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {No1Component} from './no1/theme-no1.component';

const routes: Routes = [
  {
    path: 'no1',
    component: No1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoThemeRoutingModule {
}
