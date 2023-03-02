import { AppRoutingModule } from '../app-routing.module';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
    declarations: [
        InicioComponent,
        Error404Component,
        ToolbarComponent,
        NavbarComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        InicioComponent,
        Error404Component,
        ToolbarComponent,
        NavbarComponent
    ],
    providers: []
})
export class CoreModule { }