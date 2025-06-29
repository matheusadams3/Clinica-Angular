export interface Consulta {
  id: number;
  dataHorario: string; // LocalDateTime
  sintomas: string;
  eRetorno: boolean;
  estaAtiva: boolean;
  pacienteId: number;
  medicoId: number;
}
