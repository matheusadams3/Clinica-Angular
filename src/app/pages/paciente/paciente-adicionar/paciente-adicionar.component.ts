import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-adicionar',
  templateUrl: './paciente-adicionar.component.html',
  styleUrls: ['./paciente-adicionar.component.css']
})
export class PacienteAdicionarComponent {
  paciente: Paciente = {
    id: 0,
    nome: '',
    idade: 0,
    sexo: '',
    cpf: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    contato: '',
    email: '',
    dataNascimento: ''
  };

  constructor(private pacienteService: PacienteService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.pacienteService.salvar(this.paciente).subscribe(() => {
        alert('Paciente cadastrado com sucesso!');
        form.resetForm();
      });
    }
  }
}