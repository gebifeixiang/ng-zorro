import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {DemoI18nRoutingModule} from './demo-i18n-routing.module';
import {DemoI18nComponent} from './demo-i18n.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DemoI18nRoutingModule
  ],
  declarations: [
    DemoI18nComponent
  ],
  providers: []
})

export class DemoI18nModule {

}
