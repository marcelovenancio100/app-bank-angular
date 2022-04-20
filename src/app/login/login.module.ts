import { NgModule } from "@angular/core";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }