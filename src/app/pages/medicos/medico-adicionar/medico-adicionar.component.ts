import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-adicionar',
  templateUrl: './medico-adicionar.component.html',
  styleUrls: ['./medico-adicionar.component.css']
})
export class MedicoAdicionarComponent {
  medico: Medico = {
    id: 0,
    nome: '',
    especialidade: '',
    crm: '',
    email: '',
    telefone: '',
    sexo: '',
    cpf: '',
    dataNascimento: ''
  };

  constructor(private medicoService: MedicoService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.medicoService.salvar(this.medico).subscribe(() => {
        alert('Médico cadastrado com sucesso!');
        form.resetForm();
      });
    }
  }
}