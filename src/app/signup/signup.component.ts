import { Component, ViewChild, OnInit, Inject  } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AuthService } from '../service/auth.service';
import { DialogExaComponent } from '../dialog-exa/dialog-exa.component';

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
  
  constructor(private auth: AuthService, public dialog: MatDialog) { }
  

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
      },    
      err => console.log(err) 
    )
  }

  cleanItems (){
    this.signUpUser.nombre = "";
    this.signUpUser.password = "";
    this.signUpUser.tipo = "";
  }

}

