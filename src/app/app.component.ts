import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  vlrInicial: number = 10;


  mudarValor(){
    this.vlrInicial ++;
  }
}
