import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClaimComponent} from "./claim.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {ViewComponent} from "./view/view.component";
import {ClaimRoutingModule} from "./claim-routing.mdule";
import { LossComponent } from './create/loss/loss.component';
import { DamageComponent } from './create/damage/damage.component';
import {TabMenuModule} from "primeng/tabmenu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ClaimComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    LossComponent,
    DamageComponent
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    TabMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule

  ]
})
export class ClaimModule { }
