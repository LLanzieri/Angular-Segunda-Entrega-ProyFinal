import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AlumnosService } from '../../servicio/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notas } from 'src/app/interfaces/opcionesNotas';

@Component({
  selector: 'app-editar-notas',
  templateUrl: './editar-notas.component.html',
  styleUrls: ['./editar-notas.component.css']
})

export class EditarNotasComponent implements OnInit {

  dniAlumno!: number;
  edad!: number;
  urlFoto?: string;
  nombreAlumno?: string;
  apellidoAlumno?: string;
  formularioAgregarAlumno!: FormGroup;

  notas: Notas[] = [

    { valor: 1, textoDesplegado: '1' },
    { valor: 2, textoDesplegado: '2' },
    { valor: 3, textoDesplegado: '3' },
    { valor: 4, textoDesplegado: '4' },
    { valor: 5, textoDesplegado: '5' },
    { valor: 6, textoDesplegado: '6' },
    { valor: 7, textoDesplegado: '7' },
    { valor: 8, textoDesplegado: '8' },
    { valor: 9, textoDesplegado: '9' },
    { valor: 10, textoDesplegado: '10' }

  ];

  constructor(private _activatedRoute: ActivatedRoute,
    private _alumnoServicio: AlumnosService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((parametros) => {

      this.dniAlumno = Number(parametros.get('dni')?.toString());
      this.nombreAlumno = parametros.get('nombre')?.toString();
      this.apellidoAlumno = parametros.get('apellido')?.toString();
      this.urlFoto = parametros.get('urlFoto')?.toString();
      this.edad = Number(parametros.get('edad')?.toString());

      this.formularioAgregarAlumno = new FormGroup({

        nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        nota1: new FormControl(Number(parametros.get('nota1')) || '', [Validators.required]),
        nota2: new FormControl(Number(parametros.get('nota2')) || '', [Validators.required])

      })
    })
  }

  editarNotas() {

    console.log(this.dniAlumno);

    if (this.formularioAgregarAlumno.controls['nota1'].valid && this.formularioAgregarAlumno.controls['nota2'].valid) {

      this._alumnoServicio.actualizarNotas(this.dniAlumno, this.formularioAgregarAlumno.controls['nota1'].value, this.formularioAgregarAlumno.controls['nota2'].value);

      this._snackBar.open('Información actualizada', 'Cerrar', {
        duration: 2000
      });

      this.router.navigate(['alumnos/calificaciones']);
    }
  }

  volverAtras() {
    this.router.navigate(['alumnos/calificaciones']);
  }

}
