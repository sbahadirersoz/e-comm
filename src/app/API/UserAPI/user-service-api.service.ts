import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserEntity} from '../../models/UserEntity';
import {RegisterRequestDto} from '../../models/RegisterRequestDto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceAPIService {

  url: string = 'http://localhost:8222/api/v1/users';
  MSurl: string = 'http://localhost:8087/auth/register';
  constructor(private http: HttpClient)
  {
  }
  getAllUsers():Observable<any[]>
  {
    return this.http.get<UserEntity[]>(`${this.url}/getall/users`,
      {
        headers: new HttpHeaders
        ({
          'content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }

    )
  }
  createUsers(dto:RegisterRequestDto):Observable<any[]>
  {
    //  String username,
    //                 String password,
    //                 String firstName,
    //                 String lastName,
    //                 String email
    return this.http.post<UserEntity[]>(`${this.MSurl}`,dto,
      {headers:
      new HttpHeaders
      (
        {
        'content-type': 'application/json; charset=UTF-8',
        })
      }
      )
  }


}
