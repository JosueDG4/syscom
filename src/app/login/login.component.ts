import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loguin(){
    this.auth.loginUser(this.loguinUser)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('user', res.nombre);
        this.router.navigate(['/tasks']);
      },
      err => console.log(err)
    )
  }

}
