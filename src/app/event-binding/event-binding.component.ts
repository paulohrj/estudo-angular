import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorSalvo: string;

  constructor() { }

  ngOnInit() {
  }


  guardarValor(aux){
    this.valorSalvo = aux;
    console.log(this.valorSalvo);
  }


}
