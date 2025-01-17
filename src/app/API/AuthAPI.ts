import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserEntity} from '../models/UserEntity';



@Injectable({
  providedIn: 'root'
})
export class AuthAPI {
   authendpoint: string = 'http://localhost:8087/auth';
  constructor(private http: HttpClient)
  {
  }
  login(username: string, password: string):Observable<any>
  {
    const body = {username, password};
    return this.http.post<any>(`${this.authendpoint}/login`, body,
    {
      headers: new HttpHeaders
      (
        {'content-type': 'application/json; charset=utf-8'}
      )
    }
    );

  }
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
  }
}
