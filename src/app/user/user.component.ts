import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit() {
    const token = this.userService.takeToken();
    const httpOptions = {
      headers : new HttpHeaders({
        'token': token
      })
    }
    this.userService.auth(httpOptions).subscribe( (response) => {

      console.log(response);
    }, (err) => {

      alert('Por favor loggese');
      console.log(err);
    })

    this.userService.getBooks().subscribe( (response : {books : string}) => {

      const books = response;
      console.log(response.books);
    }, (err) => {
      alert('Error al cargar los libros o no hay disponibles')
      console.log(err);
    });
  }

}
