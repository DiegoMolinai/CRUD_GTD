import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tarea } from '../models/Tarea'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }

  getTareas(){
    return this.http.get('http://localhost:3000/api/tareas/');
  }

  getTarea(id:string){
    return this.http.get('http://localhost:3000/api/tareas/'+ id);
  }

  saveTarea(tarea:Tarea){
    return this.http.post('http://localhost:3000/api/tareas',tarea);
  }

  deleteTarea(id:string){
    return this.http.delete('http://localhost:3000/api/tareas/' + id);
  }

  updateTarea(id: string,updatedTarea: Tarea): Observable<Tarea> {
    return this.http.put('http://localhost:3000/api/tareas'+id,updatedTarea);
  }
}
