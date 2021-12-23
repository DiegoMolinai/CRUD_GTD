import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioTareasComponent } from './Componentes/formulario-tareas/formulario-tareas.component';
import { ListaTareasComponent } from './Componentes/lista-tareas/lista-tareas.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { TareasService } from './services/tareas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTareasComponent,
    ListaTareasComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
