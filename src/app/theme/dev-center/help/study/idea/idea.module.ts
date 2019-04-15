import {NgModule} from '@angular/core';
import {IdeaRoutingModule} from './idea-routing.module';
import {IdeaComponent} from './idea.component';
import {SharedModule} from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    IdeaRoutingModule,
  ],
  declarations: [
    IdeaComponent
  ],
  providers: []
})

export class IdeaModule {

}
