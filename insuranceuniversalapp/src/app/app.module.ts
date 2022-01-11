import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { ClaimComponent } from './claim/claim.component';
import { PolicyComponent } from './policy/policy.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateComponent } from './claim/create/create.component';

import { ViewComponent } from './claim/view/view.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import {LocaleHelper} from "./models/localeHelper";
import {registerLocaleData} from "@angular/common";
import {Resources} from "./models/resources";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './vehicle/upload/upload.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './login/login.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { EditComponent } from './policy/viewstatus/edit/edit.component';
import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PolicyComponent,
    VehicleComponent,
    AccountsComponent,
    RenewComponent,
    ViewstatusComponent,
    ViewvehicleComponent,
    MyprofileComponent,
    LogoutComponent,
    UploadComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
