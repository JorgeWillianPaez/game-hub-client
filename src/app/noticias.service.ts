import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from './models/Noticias';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  apiUrl = 'http://localhost:5000/gamehubapi/Noticia';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: Noticias): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, usuario, httpOptions);
  }

  listar(): Observable<Noticias[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Noticias[]>(url);
  }
}
