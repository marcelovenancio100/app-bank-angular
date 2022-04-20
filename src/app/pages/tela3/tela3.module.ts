import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { Tela3RoutingModule } from "./tela3-routing.module";
import { Tela3Component } from "./tela3.component";

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    Tela3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Tela3RoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: []
})
export class Tela3Module { }