import { RouterModule, Routes } from '@angular/router';

import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';
import { NgModule } from '@angular/core';
import { FormAgregarAlumnoComponent } from './components/form-agregar-alumno/form-agregar-alumno.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { EditarNotasComponent } from './components/editar-notas/editar-notas.component';

const routes: Routes = [
  { path: 'alumnos', redirectTo: 'alumnos/lista', pathMatch: 'full' },
  {
    path: 'alumnos', children: [
      { path: 'lista', component: ListaCardsComponent },
      { path: 'datos', component: ListaAlumnosComponent },
      { path: 'formularioagregar', component: FormAgregarAlumnoComponent },
      { path: 'calificaciones', component: CalificacionesComponent },
      { path: 'editarnotas', component: EditarNotasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
