import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import { Paciente } from 'src/app/models/paciente.model';

@Component({
  selector: 'app-paciente-listar',
  templateUrl: './paciente-listar.component.html',
  styleUrls: ['./paciente-listar.component.css']
})
export class PacienteListarComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.listar().subscribe(data => {
      this.pacientes = data;
    });
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir este paciente?')) {
      this.pacienteService.excluir(id).subscribe(() => {
        this.pacientes = this.pacientes.filter(p => p.id !== id);
      });
    }
  }

  editar(paciente: Paciente): void {
    console.log('Editar paciente:', paciente);
  }
}
