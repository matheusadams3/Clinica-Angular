import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prontuario } from 'src/app/models/prontuario.model';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  save(prontuario: Prontuario): Observable<any>{
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name':'prontuarios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.post(API_URL, prontuario, { 
      headers, 
      observe: 'response' 
    });
  }

  getById(searchId: string) : Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name': 'prontuarios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.get<Prontuario>(`${API_URL}/${searchId}`, { 
      headers, 
      observe: 'response' 
    });
  }

  update(id: string, prontuario: Prontuario): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'prontuarios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.put(`${API_URL}/${id}`, prontuario, {
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

  constructor(private http:HttpClient) { }
}
