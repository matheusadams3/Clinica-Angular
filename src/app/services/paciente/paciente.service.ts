import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from 'src/app/models/paciente.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  save(paciente: Paciente): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'pacientes',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.post<any>(API_URL, paciente, {
      headers, 
      observe: 'response'
    });
  }

  update(id: string, paciente: Paciente): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'pacientes',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.put(`${API_URL}/${id}`, paciente, {
      headers,
      observe: 'response'
    });
  }

  getById(searchId: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'pacientes',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.get<Paciente>(`${API_URL}/${searchId}`, {
      headers, observe: 'response'
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
