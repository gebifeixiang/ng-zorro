import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'idea',
    loadChildren: './idea/idea.module#IdeaModule'
  },
  {
    path: 'link',
    loadChildren: './link/link.module#LinkModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule {
}
