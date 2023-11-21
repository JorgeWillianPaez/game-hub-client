import { Injectable } from '@angular/core';
import { Biblioteca } from './models/Biblioteca';
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
export class BibliotecaService {
  apiUrl = 'http://localhost:5000/gamehubapi/Biblioteca';
  constructor(private http: HttpClient) {}
  listar(): Observable<Biblioteca[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Biblioteca[]>(url);
  }
  buscar(id: number): Observable<Biblioteca> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Biblioteca>(url);
  }
  cadastrar(biblioteca: Biblioteca): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, biblioteca, httpOptions);
  }
  alterar(biblioteca: Biblioteca): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, biblioteca, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
