import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExaComponent } from './dialog-exa/dialog-exa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (public dialog : MatDialog){}
  title = 'syscom';
  dataChild = "este mensaje es para el formulario component desde la app Component"
  message = ""

  openDialog(){
    this.dialog.open(DialogExaComponent);
  }
}
