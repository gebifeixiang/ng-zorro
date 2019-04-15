import {NgModule} from '@angular/core';
import {DevCenterHelpRoutingModule} from './help-routing.module';
import {DevCenterHelpComponent} from './help.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DevCenterHelpRoutingModule,
  ],
  declarations: [
    DevCenterHelpComponent
  ],
  providers: []
})

export class DevCenterHelpModule {

}
