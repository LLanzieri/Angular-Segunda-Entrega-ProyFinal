import { AgregarAlumnoDialogComponent } from './alumnos/components/agregar-alumno-dialog/agregar-alumno-dialog.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EditarAlumnoDialogComponent } from './alumnos/components/editar-alumno-dialog/editar-alumno-dialog.component';
import { Error404Component } from './components/error404/error404.component';
import { FormatoTituloDirective } from './directives/formato-titulo.directive';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModuloPersonalizadoModule } from './modulo-personalizado.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FormatoTituloDirective,
    EditarAlumnoDialogComponent,
    AgregarAlumnoDialogComponent,
    InicioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModuloPersonalizadoModule,
    AlumnosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
