import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from 'src/app/models/convenio.model';
import { API_URL, X_ACCESS_KEY } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  save(convenio: Convenio): Observable<any>{
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name':'convenios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.post(API_URL, convenio, { 
      headers, 
      observe: 'response' 
    });
  }

  getById(searchId: string) : Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'X-Bin-Name': 'convenios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.get<Convenio>(`${API_URL}/${searchId}`, { 
      headers, 
      observe: 'response' 
    });
  }

  update(id: string, convenio: Convenio): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Bin-Name': 'convenios',
      'X-ACCESS-KEY': X_ACCESS_KEY
    });
    return this.http.put(`${API_URL}/${id}`, convenio, {
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
