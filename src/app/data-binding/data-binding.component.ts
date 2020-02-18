import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = "http://paulo.com";
  cursoAngular: boolean = true;
  nomeDoCurso: String  = 'ANGULAR';

  imgNature: "http://lorempixel.com/400/200";

  getValor(){
    return 1;
  }

  getCursoAngular(){
    return this.cursoAngular;
  }

  nome: String ='adc';

  pessoa: any = {
    nome: 'ruanito',
    idade: 10
  }

  onMudouValor(evento){
     console.log(evento);
  }


  constructor() { }

  ngOnInit() {
  }

}
