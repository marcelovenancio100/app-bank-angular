import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    /***** MODO NORMAL */
    //component: PagesComponent

    /***** LAZY LOADING */
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    /***** MODO NORMAL */
    //component: LoginComponent

    /***** LAZY LOADING */
    loadChildren: () => import('./login/login.module').then(res => res.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
