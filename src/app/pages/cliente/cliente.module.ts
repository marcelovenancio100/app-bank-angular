import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./cliente.component";
import { ClienteService } from "./cliente.service";

import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { MaterialModule } from "app/material.module";

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListaComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    MaterialModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: []
})
export class ClienteModule { }