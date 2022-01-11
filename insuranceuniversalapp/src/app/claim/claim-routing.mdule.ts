import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {ViewComponent} from "./view/view.component";
import {LossComponent} from "./create/loss/loss.component";
import {DamageComponent} from "./create/damage/damage.component";
const routes: Routes = [
  {
    path:'Create',
    component:CreateComponent,
    children:[
      {
        path:'Loss',
        component:LossComponent
      },
      {
        path:'Damage',
        component:DamageComponent
      }
    ]
  },
  {
    path:'Edit',
    component:EditComponent
  },
  {
    path:'View',
    component:ViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule {

}
