import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


  // @Input('nomeDoCurso') lalala: string ='';
 @Input() valor: number = 0;
 

 @Output() modouValor = new EventEmitter();

  incrementa(){
    this.valor ++;
    this.modouValor.emit({novoValor: this.valor})
    console.log("valor");
  }
  
  decrementa(){
    this.valor--;
    this.modouValor.emit({novoValor: this.valor})
  }
  
  constructor() { }

  ngOnInit() {
  }


  

}
