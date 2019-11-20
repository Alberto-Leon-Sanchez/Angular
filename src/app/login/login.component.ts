import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService : UserService, private router: Router) { }

  login(data){
    console.log(data.value);
    this.userService.login(data.value).subscribe( (response: {token: string}) => {

      alert('Usuario logeado');
      console.log(response);
      this.userService.saveToken(response.token);
      this.userService.takeToken();
      this.router.navigate(['user']);
    }, (err) => {
      console.log(err);
      alert('Usuario o contraseña incorrecta');
    });
  }
  
  ngOnInit() {
    const token = this.userService.takeToken();
    const httpOptions = {
      headers : new HttpHeaders({
        'token': token
      })
    }
    this.userService.auth(httpOptions).subscribe( (response) => {

      this.router.navigate(['user']);
      console.log(response);
      alert('Token encontrado rediregido a user')
    }, (err) => {
  
    })
  }

}
