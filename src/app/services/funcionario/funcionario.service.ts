import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario.model';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  save(funcionario: Funcionario): Observable<any>{
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name':'funcionarios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.post(API_URL, funcionario, { 
      headers, 
      observe: 'response' 
    });
  }

  update(id: string, funcionario: Funcionario): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'funcionarios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.put(`${API_URL}/${id}`, funcionario, {
      headers,
      observe: 'response'
    });
  }

  getById(searchId: string) : Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name': 'funcionarios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.get<Funcionario>(`${API_URL}/${searchId}`, { 
      headers, 
      observe: 'response' 
    });
  }

  delete(id: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.delete(`${API_URL}/${id}`, { 
      headers, 
      observe: 'response' 
    });
  }

  constructor(private http: HttpClient) { }
}
