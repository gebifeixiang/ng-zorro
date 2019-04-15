import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ZorroTreeComponent} from "./tree/zorro-tree.component";

const routes: Routes = [
  {
    path: 'tree',
    component: ZorroTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZorroRoutingModule {
}
