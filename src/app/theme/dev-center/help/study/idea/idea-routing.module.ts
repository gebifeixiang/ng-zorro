import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IdeaComponent} from "./idea.component";

const routes: Routes = [
  {
    path: '',
    component: IdeaComponent,
    data: {
      title: '',
      icon: 'ti-user',
      caption: '',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaRoutingModule {
}