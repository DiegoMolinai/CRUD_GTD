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
    return this.http.get('http://20.94.18.84:3000/api/tareas/');
  }

  getTarea(id:string){
    return this.http.get('http://20.94.18.84:3000/api/tareas/'+ id);
  }

  saveTarea(tarea:Tarea){
    return this.http.post('http://20.94.18.84:3000/api/tareas',tarea);
  }

  deleteTarea(id:string){
    return this.http.delete('http://20.94.18.84:3000/api/tareas/' + id);
  }

  updateTarea(id: string,updatedTarea: Tarea):Observable<Tarea> {
    console.log(updatedTarea);
    console.log(id);
    return this.http.put('http://20.94.18.84:3000/api/tareas/'+id,updatedTarea);
  }
}
