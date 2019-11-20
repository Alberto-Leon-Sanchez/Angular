import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService, SESSION_STORAGE} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private http: HttpClient) { }

    login(data) {
      return this.http.post('http://localhost:3000/contacts/login', data)
    }

    createUser(data){
      return this.http.post('http://localhost:3000/contacts', data);
    }

    saveToken(token){
      this.storage.set('token',token);
    }

    takeToken(){
      const token = this.storage.get('token')
      console.log(token);
      return token;
    }
}
