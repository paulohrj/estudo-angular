import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-acessar-valor-input',
  templateUrl: './acessar-valor-input.component.html',
  styleUrls: ['./acessar-valor-input.component.css']
})
export class AcessarValorInputComponent implements OnInit {

  @ViewChild('vlrInput', {static: false}) vlrInput2: ElementRef;

  pegarValorInput(){
    let a;
    console.log(this.vlrInput2.nativeElement.value)
  }
  constructor() { }

  ngOnInit() {
  }

}
