import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'cliente',
        //component: ClienteComponent,
        loadChildren: () => import('./cliente/cliente.module').then(res => res.ClienteModule)
      },
      {
        path: 'tela2',
        //component: Tela2Component,
        loadChildren: () => import('./tela2/tela2.module').then(res => res.Tela2Module)
      },
      {
        path: 'tela3',
        //component: Tela3Component,
        loadChildren: () => import('./tela3/tela3.module').then(res => res.Tela3Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }