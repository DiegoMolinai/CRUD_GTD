import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { TareasService } from 'src/app/services/tareas.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.css'],
})
export class FormularioTareasComponent implements OnInit {
  tarea: Tarea = {
    id:'0',
    titulo: '',
    descripcion: '',
    creacion: 'now',
  };
  
  tituloeditado: string = '';
  descripcioneditada: string = '';
  edit: boolean = false;

  constructor(
    private tareasServicio: TareasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params.id) {
      this.tareasServicio.getTarea(params.id).subscribe(
        (res) => {
          this.tarea = res;
          this.tarea.id= params.id;
          this.edit = true;
        },
        (err) => console.log(err)
      );
    }
  }

  guardarTarea() {
    delete this.tarea.id;
    this.tarea.titulo=this.tituloeditado;
    this.tarea.descripcion=this.descripcioneditada;
    this.tareasServicio.saveTarea(this.tarea).subscribe(
      (res) => {
        alert(
          'Tarea Guardada'
        );
        this.router.navigate(['/tareas']);
      },
      (err) => console.log(err)
    );
  }

  salir() {
    this.router.navigateByUrl('/tareas');
  }

  updateTarea() {
    let tareaEditada:Tarea = { id: this.tarea.id, titulo: this.tituloeditado, descripcion: this.descripcioneditada, creacion: String(Date()) };
    this.tareasServicio.updateTarea(String(tareaEditada.id), tareaEditada).subscribe(
      (res) => {
        alert(
          'Tarea Editada!'
        );
        this.router.navigate(['/tareas']);
      },
      (err) => alert(err)
    );
  }
}
