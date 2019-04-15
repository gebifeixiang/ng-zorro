import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {DemosComponent} from './demos.component';
import {DemosRoutingModule} from './demos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DemosRoutingModule
  ],
  declarations: [
    DemosComponent
  ],
  providers: [
  ],
  exports: [
  ]
})
export class DemosModule {

}
