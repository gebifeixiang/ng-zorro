import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {DemoThemeRoutingModule} from './demo-theme-routing.module';
import {No1Component} from './no1/theme-no1.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DemoThemeRoutingModule
  ],
  declarations: [
    No1Component
  ],
  providers: []
})

export class DemoThemeModule {

}
