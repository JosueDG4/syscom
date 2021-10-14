import { Component, ViewChild, OnInit, Inject  } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AuthService } from '../service/auth.service';
import { DialogExaComponent } from '../dialog-exa/dialog-exa.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpUser={
    'nombre': '',
    'password': '',
    'tipo': ''
  }

  favoriteSeason: any;
  seasons: string[] = ['Admin', 'User'];
  
  constructor(private auth: AuthService, public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }
  

  ngOnInit(): void {
  }

  signUp(){
    this.auth.signUpUser(this.signUpUser)
    .subscribe(
      res =>{  
        this.cleanItems();
        this.dialog.open(DialogExaComponent);
        console.log(res)
        localStorage.setItem('user', res.nombre);
        this.router.navigate(["/tasks"])
      },    
      err => {
        console.log(err) 
        if (err.status === 409){
          this.snackBar.open("El usuario ya existe, coloca otro nombre de usuario","Error",{duration: 8000});
        }
      }
    )
  }

  cleanItems (){
    this.signUpUser.nombre = "";
    this.signUpUser.password = "";
    this.signUpUser.tipo = "";
  }

}

