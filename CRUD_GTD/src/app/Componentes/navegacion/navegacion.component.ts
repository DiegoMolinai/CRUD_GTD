import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public redireccionar():void{
    this.router.navigate(['/tareas/add'])
  }
}
