import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-medico-listar',
  templateUrl: './medico-listar.component.html',
  styleUrls: ['./medico-listar.component.css']
})
export class MedicoListarComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.medicoService.listar().subscribe(data => {
      this.medicos = data;
    });
  }

  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este médico?')) {
      this.medicoService.excluir(id).subscribe(() => {
        this.medicos = this.medicos.filter(m => m.id !== id);
      });
    }
  }

  editar(medico: Medico): void {
    // Aqui você pode redirecionar para outro componente de edição ou carregar os dados em um modal/form
    console.log('Editar médico:', medico);
  }
}