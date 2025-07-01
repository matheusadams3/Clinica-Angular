import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
import { FuncionarioAdicionarComponent } from './pages/funcionario/funcionario-adicionar/funcionario-adicionar.component';
import { FuncionarioListarComponent } from './pages/funcionario/funcionario-listar/funcionario-listar.component';

import { PacienteAdicionarComponent } from './pages/paciente/paciente-adicionar/paciente-adicionar.component';
import { PacienteListarComponent } from './pages/paciente/paciente-listar/paciente-listar.component';

import { MedicoAdicionarComponent } from './pages/medicos/medico-adicionar/medico-adicionar.component';
import { MedicoListarComponent } from './pages/medicos/medico-listar/medico-listar.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'convenios/adicionar', component: ConvenioAdicionarComponent },
  { path: 'convenios/listar', component: ConvenioListarComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'especialidades/adicionar', component: EspecialidadeAdicionarComponent },
  { path: 'especialidades/listar', component: EspecialidadeListarComponent },
  { path: 'boas-vinda', component: BoasVindaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'funcionario/adicionar', component: FuncionarioAdicionarComponent },
{ path: 'funcionarios', component: FuncionarioListarComponent },
{ path: 'paciente/adicionar', component: PacienteAdicionarComponent },
{ path: 'pacientes', component: PacienteListarComponent },
{ path: 'medico/adicionar', component: MedicoAdicionarComponent },
{ path: 'medicos', component: MedicoListarComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
