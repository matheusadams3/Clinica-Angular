import { Injectable } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  save(medico: Medico): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name':'medicos',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.post(API_URL, medico, {
      headers,
      observe: 'response'
    });
  }

  update(id: string, medico: Medico): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'medicos',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.put(`${API_URL}/${id}`, medico, {
      headers,
      observe: 'response'
    });
  }

  getById(searchId: string) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'medicos',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.get<Medico>(`${API_URL}/${searchId}`, {
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
