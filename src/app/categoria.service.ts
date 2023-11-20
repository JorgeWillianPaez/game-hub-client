import { Injectable } from '@angular/core';
import { Categoria } from './models/Categoria';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl = 'http://localhost:5000/gamehubapi/Categoria';
  constructor(private http: HttpClient) {}
  listar(): Observable<Categoria[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Categoria[]>(url);
  }
  buscar(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categoria>(url);
  }
  cadastrar(usuario: Categoria): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, usuario, httpOptions);
  }
  alterar(usuario: Categoria): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, usuario, httpOptions);
  }
}
