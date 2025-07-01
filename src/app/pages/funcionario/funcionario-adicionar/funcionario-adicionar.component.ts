import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-adicionar',
  templateUrl: './funcionario-adicionar.component.html',
  styleUrls: ['./funcionario-adicionar.component.css']
})
export class FuncionarioAdicionarComponent {
  funcionario: Funcionario = {
    id: 0,
    usuario: '',
    senha: 0,
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

  constructor(private funcionarioService: FuncionarioService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.funcionarioService.salvar(this.funcionario).subscribe(() => {
        alert('Funcionário cadastrado com sucesso!');
        form.resetForm();
      });
    }
  }
}