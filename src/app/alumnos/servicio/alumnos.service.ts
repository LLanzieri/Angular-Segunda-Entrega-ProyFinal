import { BehaviorSubject, Observable } from 'rxjs';

import { Alumno } from 'src/app/interfaces/alumno';
import { Injectable } from '@angular/core';

@Injectable()

export class AlumnosService {

  // Lista observable
  private observableListaAlumnos$: BehaviorSubject<Alumno[]>;

  private listaAlumnosServicio: Alumno[] = [
    { dni: 123123123, nombre: 'Lionel', apellido: 'Messi', edad: 35, cursoAprobado: true, urlFoto: "../../assets/messi.jpg", nota1: 10, nota2: 10 },
    { dni: 222222333, nombre: 'Sergio', apellido: 'Aguero', edad: 30, cursoAprobado: false, urlFoto: "../../assets/kun-aguero.jpg", nota1: 2, nota2: 3 },
    { dni: 33221111, nombre: 'Leandro', apellido: 'Paredes', edad: 30, cursoAprobado: true, urlFoto: "../../assets/Leandro-Paredes.jpg", nota1: 7, nota2: 7 },
    { dni: 111223344, nombre: 'Emiliano', apellido: 'Martinez', edad: 32, cursoAprobado: true, urlFoto: "../../assets/dibumartinez.jpg", nota1: 9, nota2: 9 },
    { dni: 6667754, nombre: 'Nicolas', apellido: 'Otamendi', edad: 29, cursoAprobado: true, urlFoto: "../../assets/otamendi.jpg", nota1: 9, nota2: 8 },
    { dni: 456421, nombre: 'Alexis', apellido: 'Mac Allister', edad: 28, cursoAprobado: false, urlFoto: "../../assets/alexis.PNG", nota1: 3, nota2: 3 },
    { dni: 908754, nombre: 'Lautaro', apellido: 'Martinez', edad: 29, cursoAprobado: true, urlFoto: "../../assets/lautaromartinez.PNG", nota1: 9, nota2: 8 },
    { dni: 200715141, nombre: 'Angel', apellido: 'Di Maria', edad: 34, cursoAprobado: false, urlFoto: "../../assets/dimaria.PNG", nota1: 4, nota2: 2 }
  ]

  constructor() {

    // El objeto lista observable que se asocie a la lista de alumnos
    this.observableListaAlumnos$ = new BehaviorSubject(this.listaAlumnosServicio);
  }

  // Lo voy a utilizar para devolver la lista con Promise en OnInit
  obtenerAlumnosPromise(): Promise<Alumno[]> {
    return new Promise((resolve, reject) => {

      resolve(this.listaAlumnosServicio);
      reject("ERROR EN SERVICIO");
    })
  }

  // Lo voy a utilizar para obtener el observable
  obtenerAlumnosObservable(): Observable<Alumno[]> {

    return this.observableListaAlumnos$.asObservable();

  }

  agregarAlumno(objAlumno: Alumno) {

    // Agrego al array de alumnos
    this.listaAlumnosServicio.push(objAlumno);

    // Mando novedades
    this.retornarListaActualizada();

  }

  eliminarAlumno(DNIenviado: number) {

    // A mi lista de alumnos en servicio le asigno lo que devuelva el filter
    this.listaAlumnosServicio = this.listaAlumnosServicio.filter(item => this.esDistinto(DNIenviado, item.dni));

    // Mi objeto observable se modifica, entonces notifico a los suscriptores con un next
    this.retornarListaActualizada();

  }

  esDistinto(dni1: number, dni2: number): boolean {
    return dni1 !== dni2;
  }

  actualizarListaAlumnos(objAlumno: Alumno) {

    // Agarro la referencia del alumno a modificar
    const alumno = this.listaAlumnosServicio.find(a => a.dni === objAlumno.dni);

    // Actualizo la referencia del alumno
    if (alumno) {
      alumno.nombre = objAlumno.nombre;
      alumno.apellido = objAlumno.apellido;
      alumno.edad = objAlumno.edad;
      alumno.cursoAprobado = objAlumno.cursoAprobado;
    }

    // Mi objeto observable se modifica, entonces notifico a los suscriptores con un next
    this.retornarListaActualizada();

  }

  actualizarNotas(dni: number, nota1: number, nota2: number) {

    // Agarro la referencia del alumno a modificar
    const alumno = this.listaAlumnosServicio.find(a => a.dni === dni);

    // Actualizo
    if (alumno) {
      alumno.nota1 = nota1;
      alumno.nota2 = nota2;
    }

    // Mi objeto observable se modifica, entonces notifico a los suscriptores con un next
    this.retornarListaActualizada();

  }

  private retornarListaActualizada() {

    this.observableListaAlumnos$.next(this.listaAlumnosServicio);

  }

}