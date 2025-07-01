import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario.model';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Bin-Name': 'funcionarios',
    'X-ACCESS-KEY': X_ACCESS_KEY
  });

  constructor(private http: HttpClient) {}

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(API_URL, funcionario, { headers: this.headers });
  }

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(API_URL, { headers: this.headers });
  }

  atualizar(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${API_URL}/${id}`, funcionario, { headers: this.headers });
  }

  buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${API_URL}/${id}`, { headers: this.headers });
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, { headers: this.headers });
  }
}