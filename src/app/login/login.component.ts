import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loguinUser={
    'nombre': '',
    'password': ''
  }

  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  @Output() childEvent = new EventEmitter();
  errorSession = false;

  ngOnInit(): void {
    //this.auth.logoutUser()
  }

  loguin(){
    this.auth.loginUser(this.loguinUser)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('user', res.nombre);
        sessionStorage.setItem('user2', res.nombre);
        this.router.navigate(['/tasks']);
      },
      err => {
        this.errorSession = true;
        console.log(err)
        //this.snackBar.open("Usuario o Contraseña incorrectos","Error");
      }
    
    )
  }

}
