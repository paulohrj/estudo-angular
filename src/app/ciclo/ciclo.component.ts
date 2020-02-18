import { Component, OnInit, Input } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number;

  constructor() { }

  ngOnInit() {
  }

}
