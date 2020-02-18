import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessarValorInputComponent } from './acessar-valor-input.component';

describe('AcessarValorInputComponent', () => {
  let component: AcessarValorInputComponent;
  let fixture: ComponentFixture<AcessarValorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessarValorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessarValorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
