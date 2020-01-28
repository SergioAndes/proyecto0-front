import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private headers: HttpHeaders;
  private URL_HOST = 'http://localhost:8000/core/'

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json, text/plain'});
  }
   getEventsXUser(tok): Observable<any> {
    return this.http.post(this.URL_HOST + 'eventos/', { token: tok});
  }
}
