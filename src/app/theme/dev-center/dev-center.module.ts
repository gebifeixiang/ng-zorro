import {NgModule} from '@angular/core';
import {DevCenterComponent} from './dev-center.component';
import {DevCenterRoutingModule} from './dev-center-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {Title} from '@angular/platform-browser';

@NgModule({
  imports: [
    SharedModule,
    DevCenterRoutingModule
  ],
  declarations: [
    DevCenterComponent
  ],
  providers: [],
  exports: []
})
export class DevCenterModule {

  constructor(private title: Title) {
    this.title.setTitle('微平台 · 开发者中心');
  }
}
