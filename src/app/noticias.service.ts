import { Injectable } from '@angular/core';
import { Noticia } from './models/Noticia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  apiUrl = 'http://localhost:5000/gamehubapi/Noticia';
  constructor(private http: HttpClient) {}
  listar(): Observable<Noticia[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Noticia[]>(url);
  }
  buscar(id: number): Observable<Noticia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Noticia>(url);
  }
  cadastrar(noticia: Noticia): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, noticia, httpOptions);
  }
  alterar(noticia: Noticia): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, noticia, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
