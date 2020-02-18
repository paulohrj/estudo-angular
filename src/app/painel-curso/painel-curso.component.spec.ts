import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCursoComponent } from './painel-curso.component';

describe('PainelCursoComponent', () => {
  let component: PainelCursoComponent;
  let fixture: ComponentFixture<PainelCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
