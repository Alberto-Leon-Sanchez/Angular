import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

    loginInfo;

    login(email:string, password:string) {
      this.loginInfo = this.http.post('http://localhost:3000/contacts/login', {
        email: email,
        password: password,
      })
      return this.loginInfo;
    }
}
