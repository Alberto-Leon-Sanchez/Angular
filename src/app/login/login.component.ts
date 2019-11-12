import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService : UserService, private router: Router) { }
  
  user: User = {
    email: "",
    password: "",
  }

  logIn(email:string, password:string){
    this.userService.login(email,password).subscribe( data => {
      if (data){
        console.log(data);
        this.router.navigate(['user'])
      }
      else alert("a");
    }), res => {
      alert('Usuario o contraseña incorrecta');
      if (res) return console.log(res.status);
    };
    
  }
  ngOnInit() {

  }

}
