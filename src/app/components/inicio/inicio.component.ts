import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) { }

  redirigirListaAlumnos() {
    this.router.navigateByUrl('alumnos/lista');
  }

  redirigirDatosAlumnos() {
    this.router.navigateByUrl('alumnos/datos');
  }

  redirigirFormularioAgregarAlumno() {
    this.router.navigateByUrl('alumnos/formularioagregar');
  }

}