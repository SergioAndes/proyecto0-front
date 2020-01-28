import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Globals} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;
  private URL_HOST = 'http://localhost:8000/core/'

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain' });
  }

  registerUser(name, pass): Observable<any> {
    return this.http.post(this.URL_HOST + 'createUser/', { username: name, password: pass});
  }

  loginUser(name, pass): Observable<any> {
    return this.http.post('http://localhost:8000/api-token-auth/ ', { username: name, password: pass });
  }

  getEventsXUser(tok): Observable<any> {
    return this.http.post(this.URL_HOST + 'eventos/', { token: tok});
  }

  createEvents(nombre, lugar, direccion, fechaInicio, fechaFin, presencial, tok): Observable<any> {
    console.log('TOKEEEN', tok)

    return this.http.post(this.URL_HOST + 'creato/', { token: tok, nombre: nombre, lugar: lugar,
      direccion: direccion,fechaInicio: fechaInicio,fechaFin: fechaFin,presencial: presencial});
  }

  deleteEvent(eventId): Observable<any> {
    return this.http.post(this.URL_HOST + 'deleteEvent/', { id: eventId});
  }

  updateEvent(id, nombre, lugar, direccion, fechaInicio, fechaFin, presencial): Observable<any> {
    return this.http.post(this.URL_HOST + 'updateEvent/', { id: id, nombre: nombre, lugar: lugar,
      direccion: direccion,fechaInicio: fechaInicio,fechaFin: fechaFin,presencial: presencial});
  }

  getCategories(): Observable<any> {
    return this.http.get(this.URL_HOST + 'categories/');
  }

    getCategoriesById(id): Observable<any> {
    return this.http.get(this.URL_HOST + 'category?id=' + id);
  }

}
