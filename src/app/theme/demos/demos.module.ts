import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DemosComponent} from './demos.component';
import {DemosRoutingModule} from './demos-routing.module';
import {DemosDefaultComponent} from './default/demos-default.component';
import {DemosI18nComponent} from './i18n/demos-i18n.component';

@NgModule({
  imports: [
    SharedModule,
    DemosRoutingModule
  ],
  declarations: [
    DemosComponent,
    DemosDefaultComponent,
    DemosI18nComponent
  ],
  providers: [],
  exports: []
})
export class DemosModule {

}
