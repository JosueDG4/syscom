import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-userlogger',
  templateUrl: './userlogger.component.html',
  styleUrls: ['./userlogger.component.css']
})
export class UserloggerComponent implements OnInit {

  constructor(public auth: AuthService) { }

  userLogger = localStorage.getItem('user');
  userLogger2 = sessionStorage.getItem('user2');

  ngOnInit(): void {
  }

}
