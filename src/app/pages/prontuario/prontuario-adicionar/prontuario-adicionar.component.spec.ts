import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioAdicionarComponent } from './prontuario-adicionar.component';

describe('ProntuarioAdicionarComponent', () => {
  let component: ProntuarioAdicionarComponent;
  let fixture: ComponentFixture<ProntuarioAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioAdicionarComponent]
    });
    fixture = TestBed.createComponent(ProntuarioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
