import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { Tela1RoutingModule } from "./tela1-routing.module";
import { Tela1Component } from "./tela1.component";
import { Tela1Service } from "./tela1.service";

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    Tela1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Tela1RoutingModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    Tela1Service
  ],
  bootstrap: []
})
export class Tela1Module { }