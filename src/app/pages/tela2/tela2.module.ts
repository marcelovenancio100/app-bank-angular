import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { Tela2RoutingModule } from "./tela2-routing.module";
import { Tela2Component } from "./tela2.component";

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    Tela2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Tela2RoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: []
})
export class Tela2Module { }