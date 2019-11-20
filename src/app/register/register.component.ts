import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  register(data){
    this.userService.createUser(data.value).subscribe( (response) => {
      alert('Usuario creado');
      console.log(response);
    }, (err) => {
      alert('Error al crear el usuario');
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
