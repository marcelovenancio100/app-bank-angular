import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Tela1Component } from "./tela1.component";

const routes: Routes = [
  {
    path: '',
    component: Tela1Component
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class Tela1RoutingModule { }