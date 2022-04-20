import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '@env/*';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { LoginModule } from './login/login.module';
//import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule

    //***** QUANDO É CARREGAMENTO VIA LAZY-LOADING, NÃO PRECISA IMPORTAR NO MÓDULO PAI */
    //LoginModule,
    //PagesModule
  ],
  providers: [
    {
      provide: 'environment',
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
