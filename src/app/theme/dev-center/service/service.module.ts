import {NgModule} from '@angular/core';
import {DevCenterServiceRoutingModule} from './service-routing.module';
import {DevCenterServiceComponent} from './service.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DevCenterServiceRoutingModule,
  ],
  declarations: [
    DevCenterServiceComponent
  ],
  providers: []
})

export class DevCenterServiceModule {

}
