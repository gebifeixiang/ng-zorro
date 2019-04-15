import {NgModule} from '@angular/core';
import {I18nRoutingModule} from './i18n-routing.module';
import {I18nComponent} from './i18n.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    I18nRoutingModule,
  ],
  declarations: [
    I18nComponent
  ],
  providers: []
})

export class I18nModule {

}
