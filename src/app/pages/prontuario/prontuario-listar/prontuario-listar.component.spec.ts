import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioListarComponent } from './prontuario-listar.component';

describe('ProntuarioListarComponent', () => {
  let component: ProntuarioListarComponent;
  let fixture: ComponentFixture<ProntuarioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioListarComponent]
    });
    fixture = TestBed.createComponent(ProntuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
