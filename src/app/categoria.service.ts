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
  cadastrar(categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, categoria, httpOptions);
  }
  alterar(categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, categoria, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
