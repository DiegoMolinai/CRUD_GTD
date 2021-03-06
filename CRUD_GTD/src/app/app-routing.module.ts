import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './Componentes/lista-tareas/lista-tareas.component';
import { FormularioTareasComponent } from './Componentes/formulario-tareas//formulario-tareas.component'

const routes: Routes = [
  {path:'', redirectTo: '/tareas', pathMatch:'full'},
  {path:'tareas/', redirectTo: '/tareas'},
  {path: 'tareas', component:ListaTareasComponent},
  {path: 'tareas/add', component: FormularioTareasComponent},
  {path: 'tareas/editar/:id', component:FormularioTareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
