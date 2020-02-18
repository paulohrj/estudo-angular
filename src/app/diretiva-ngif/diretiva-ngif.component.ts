import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  mostrarCursos: boolean;


  cursos: string[] = [];
  
  changeCurse(){
    this.mostrarCursos = !this.mostrarCursos;
    this.cursos.push("s");
  }

  constructor() { }

  ngOnInit() {
  }

}
