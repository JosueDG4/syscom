import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.auth.logoutUser()
  }

  loguin(){
    this.auth.loginUser(this.loguinUser)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('user', res.nombre);
        localStorage.setItem('iduser', res.idusuario);
        //window.location.replace('/tasks');
        this.router.navigate(['/tasks']);
      },
      err => {
        console.log(err)
        this.snackBar.open("Usuario o Contraseña incorrectos","Error");
      }
    
    )
  }

}
