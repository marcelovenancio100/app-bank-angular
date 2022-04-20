import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Tela3Component } from "./tela3.component";

const routes: Routes = [
  {
    path: '',
    component: Tela3Component
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class Tela3RoutingModule { }