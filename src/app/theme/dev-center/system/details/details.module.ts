import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DetailsComponent} from './details.component';
import {DetailsRoutingModule} from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DetailsRoutingModule
  ],
  declarations: [
    DetailsComponent
  ],
  providers: [],
  exports: []
})
export class DetailsModule {

}
