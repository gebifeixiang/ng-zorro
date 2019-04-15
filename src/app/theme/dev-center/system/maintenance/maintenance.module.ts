import {NgModule} from '@angular/core';
import {MaintenanceRoutingModule} from './maintenance-routing.module';
import {MaintenanceComponent} from './maintenance.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MaintenanceRoutingModule,
  ],
  declarations: [
    MaintenanceComponent
  ],
  providers: []
})

export class MaintenanceModule {

}
