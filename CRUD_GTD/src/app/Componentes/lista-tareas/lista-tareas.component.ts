import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/Tarea';
import { TareasService } from '../../services/tareas.service'

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: any = []
  id:string|null=null;
  tareaEditar: Tarea = {
    titulo:'',
    descripcion:'',
    creacion:''
  }

  constructor(private tareasService: TareasService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.tareasService.getTareas().subscribe(
      res => {
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

  borrarTarea(id:string){
    this.tareasService.deleteTarea(id).subscribe(
      res => {
        window.location.reload();
      },
      err => console.log(err)
    )
  }

  editarTarea(id:string){
    this.tareasService.getTarea(id).subscribe(
      res => {
        this.tareaEditar = res;
        this.router.navigate(['/tareas/editar' + id]);
      }
    );
  }
}
