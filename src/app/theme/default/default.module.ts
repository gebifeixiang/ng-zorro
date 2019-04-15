import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {DefaultComponent} from './default.component';
import {DefaultRoutingModule} from './default-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DefaultRoutingModule
  ],
  declarations: [
    DefaultComponent
  ],
  providers: [
  ],
  exports: [
  ]
})
export class DefaultModule {

}
