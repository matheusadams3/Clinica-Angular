import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario.model';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
  styleUrls: ['./funcionario-listar.component.css']
})
export class FuncionarioListarComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.listar().subscribe(data => {
      this.funcionarios = data;
    });
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir este funcionário?')) {
      this.funcionarioService.excluir(id).subscribe(() => {
        this.funcionarios = this.funcionarios.filter(f => f.id !== id);
      });
    }
  }

  editar(funcionario: Funcionario): void {
    console.log('Editar funcionário:', funcionario);
  }
}