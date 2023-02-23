import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './servicio/alumnos.service';
import { BooleanoAtextoPipe } from './pipes/booleano-atexto.pipe';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { CommonModule } from '@angular/common';
import { EditarNotasComponent } from './components/editar-notas/editar-notas.component';
import { FormAgregarAlumnoComponent } from './components/form-agregar-alumno/form-agregar-alumno.component';
import { FormatearNombreApellidoPipe } from './pipes/formatear-nombre-apellido.pipe';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';
import { ModuloPersonalizadoModule } from '../modulo-personalizado.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FormAgregarAlumnoComponent,
    CalificacionesComponent,
    ListaCardsComponent,
    ListaAlumnosComponent,
    BooleanoAtextoPipe,
    FormatearNombreApellidoPipe,
    EditarNotasComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    ModuloPersonalizadoModule
  ],
  providers: [AlumnosService]
})
export class AlumnosModule { }