import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraListagemComponent } from './primeira-listagem.component';

describe('PrimeiraListagemComponent', () => {
  let component: PrimeiraListagemComponent;
  let fixture: ComponentFixture<PrimeiraListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
