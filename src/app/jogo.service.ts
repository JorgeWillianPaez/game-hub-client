import { Injectable } from '@angular/core';
import { Jogo } from './models/Jogo';
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
export class JogoService {
  apiUrl = 'http://localhost:5000/gamehubapi/Jogo';
  constructor(private http: HttpClient) {}
  listar(): Observable<Jogo[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Jogo[]>(url);
  }
  buscar(id: number): Observable<Jogo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Jogo>(url);
  }
  cadastrar(usuario: Jogo): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, usuario, httpOptions);
  }
  alterar(usuario: Jogo): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, usuario, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
