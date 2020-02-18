import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-curso',
  templateUrl: './painel-curso.component.html',
  styleUrls: ['./painel-curso.component.css']
})
export class PainelCursoComponent implements OnInit {

  oportunidade =[
    { descricao: 'Projeto Janta', nomeProspecto:'vinicius', valor: 'umbilhao'},
    { descricao: 'Projeto Ze', nomeProspecto:'juninho', valor: 'oitobilhao'}
    ]

    valor: string = 'asa';

  


  constructor() { }

  
  ngOnInit() {
    
  }


  
}
