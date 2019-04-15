import {NgModule} from '@angular/core';
import {LinkRoutingModule} from './link-routing.module';
import {LinkComponent} from './link.component';
import {SharedModule} from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LinkRoutingModule,
  ],
  declarations: [
    LinkComponent
  ],
  providers: []
})

export class LinkModule {

}
