import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (public dialog : MatDialog, public auth: AuthService){}
  title = 'syscom';
  message : any = sessionStorage.getItem('user2');
  userLogger = localStorage.getItem("user");
 
  openDialog(){
  }
}
