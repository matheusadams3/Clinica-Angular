import { Especialidade } from "./especialidade.model";

export interface Medico {
  id: number;
  nome: string;
  especialidade: string;
  crm: string;
  email: string;
  telefone: string;
  sexo: string;
  cpf: string;
  dataNascimento: string;
}
