import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ZorroRoutingModule} from './zorro-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {ZorroTreeComponent} from './tree/zorro-tree.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZorroRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    ZorroTreeComponent
  ],
  providers: []
})

export class ZorroModule {

}
