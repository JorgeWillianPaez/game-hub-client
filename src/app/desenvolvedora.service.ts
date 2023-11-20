import { Injectable } from '@angular/core';
import { Desenvolvedora } from './models/Desenvolvedora';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class DesenvolvedoraService {
  apiUrl = 'http://localhost:5000/gamehubapi/Desenvolvedora';
  constructor(private http: HttpClient) {}
  listar(): Observable<Desenvolvedora[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Desenvolvedora[]>(url);
  }
  buscar(id: number): Observable<Desenvolvedora> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Desenvolvedora>(url);
  }
  cadastrar(usuario: Desenvolvedora): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, usuario, httpOptions);
  }
  alterar(usuario: Desenvolvedora): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, usuario, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
