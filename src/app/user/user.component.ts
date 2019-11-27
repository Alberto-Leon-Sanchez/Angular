import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Book } from '../book';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  books : Book[];
  book1: Book[];

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

    this.userService.getBooks().subscribe( (response: Book[]) => {

      this.books = response;
      console.log(response);
    }, (err) => {
      alert('Error al cargar los libros o no hay disponibles')
      console.log(err);
    });
  }

  findByEditorial(data){
    this.userService.getBookByEditorial(data.value.data).subscribe( (response: Book[]) => {
      this.book1 = response;
      console.log(response);
    },(err) =>{
      alert('No correspone ningun elemento a la busqueda');
      console.log(err);
    });
  }

  findByAutor(data){
    this.userService.getBookByAutor(data.value.data).subscribe( (response: Book[]) => {
      this.book1 = response;
    },(err) =>{
      alert('No correspone ningun elemento a la busqueda');
      console.log(err);
    });
  }

  findByFecha(data){
    this.userService.getBookByFecha(data.value.data).subscribe( (response: Book[]) => {
      this.book1 = response;
    },(err) =>{
      alert('No correspone ningun elemento a la busqueda');
      console.log(err);
    });
  }

  findByISBN(data){
    this.userService.getBookByISBN(data.value.data).subscribe( (response: Book[]) => {
      this.book1 = response;
    },(err) =>{
      alert('No correspone ningun elemento a la busqueda');
      console.log(err);
    });
  }

  findByTitulo(data){
    this.userService.getBookByTitulo(data.value.data).subscribe( (response: Book[]) => {
      this.book1 = response;
    }, (err) => {
      alert('No correspone ningun elemento a la busqueda');
      console.log(err);
    });
  }
}
