import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteFormComponent } from "./cliente-form/cliente-form.component";

import { ClienteComponent } from "./cliente.component";

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent
  },
  {
    path: 'incluir',
    component: ClienteFormComponent
  },
  {
    path: 'editar/:id',
    component: ClienteFormComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ClienteRoutingModule { }