import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { TareasService } from '../../services/tareas.service'

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: any = []

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getTareas().subscribe(
      res => {
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

}
