import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*private signUpURL = "http://localhost:8080/auth/create"
  private loginURL = "http://localhost:8080/auth/auth"*/
  private signUpURL = "https://spring-app2-heroku.herokuapp.com/auth/create"
  private loginURL = "https://spring-app2-heroku.herokuapp.com/auth/auth"
  httpHeaders: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  signUpUser(user : any) {
    return this.http.post<any>(this.signUpURL, user,{headers:this.httpHeaders}).pipe(
      catchError( e =>{
        console.error(e.error.mensaje);
  
        return throwError(e);
      })
    );
  }

  loginUser(user: any){
    return this.http.post<any>(this.loginURL, user,{headers:this.httpHeaders})
  }

  isLogged(){
    return !!localStorage.getItem('user')
  }

  logoutUser(){
    localStorage.removeItem('user')
    this.router.navigate(['/loguin'])
  }
}

