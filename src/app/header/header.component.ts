import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public appComponent: AppComponent) { } 

  userLogger: any;
  keyuser : any;
  key : any

  usrLog = sessionStorage.getItem("user2")

  

  ngOnInit(): void {
   
  }

 

}
