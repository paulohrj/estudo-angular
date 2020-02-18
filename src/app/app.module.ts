import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import {MeuPrimeiroComponent} from './meu-primeiro-componente/meu-primeiro-component';
import {SegundoComponentComponent} from './segundo-component/segundo-component.component';
import {CursosModule} from './cursos/cursos.module';
import {PrimeiraListagemComponent} from './primeira-listagem/primeira-listagem.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { PainelCursoComponent } from './painel-curso/painel-curso.component';
import { AcessarValorInputComponent } from './acessar-valor-input/acessar-valor-input.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswithComponent } from './diretiva-ngswith/diretiva-ngswith.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgcontentComponent } from './exemplo-ngcontent/exemplo-ngcontent.component';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    SegundoComponentComponent,
    PrimeiraListagemComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    PainelCursoComponent,
    AcessarValorInputComponent,
    EventBindingComponent,
    DiretivaNgifComponent,
    DiretivaNgswithComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
