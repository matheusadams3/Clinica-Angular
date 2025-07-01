import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioAdicionarComponent } from './funcionario-adicionar.component';

describe('FuncionarioAdicionarComponent', () => {
  let component: FuncionarioAdicionarComponent;
  let fixture: ComponentFixture<FuncionarioAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioAdicionarComponent]
    });
    fixture = TestBed.createComponent(FuncionarioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
