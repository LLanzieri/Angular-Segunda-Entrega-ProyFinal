import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }