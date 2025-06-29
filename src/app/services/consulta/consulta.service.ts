import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/models/consulta.model';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  save(consulta: Consulta): Observable<any>{
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name':'consultas',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.post(API_URL, consulta, { 
      headers, 
      observe: 'response' 
    });
  }

  update(id: string, consulta: Consulta): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'consultas',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.put(`${API_URL}/${id}`, consulta, {
      headers,
      observe: 'response'
    });
  }

  getById(searchId: string) : Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name': 'consultas',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.get<Consulta>(`${API_URL}/${searchId}`, { 
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
