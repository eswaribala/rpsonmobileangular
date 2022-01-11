import { NgModule } from '@angular/core';
import { AspirelibComponent } from './aspirelib.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [AspirelibComponent, MenuComponent],
  imports: [
  ],
  exports: [AspirelibComponent]
})
export class AspirelibModule { }
