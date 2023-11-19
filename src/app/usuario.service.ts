import { Injectable } from '@angular/core';
import { Usuario } from './models/Usuario';
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
export class UsuarioService {
  apiUrl = 'http://localhost:5000/gamehubapi/Usuario';
  constructor(private http: HttpClient) {}
  listar(): Observable<Usuario[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Usuario[]>(url);
  }
  buscar(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }
  cadastrar(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, usuario, httpOptions);
  }
  alterar(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, usuario, httpOptions);
  }
}
