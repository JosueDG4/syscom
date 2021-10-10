import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Formulario no ha sido enviado todabia"
  defaultName = "Josmar"
  user = ""
  displayPassword = false
  lightStatus = "GREEN"
  names=['Alberto', 'Martha', 'Maria', 'Marcos']

  @Input() parentDataChild : any
  @Input('parentDataChild') messageFrontParent : any 

  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(){
  }

  onSendForm(email:any){
    console.log(email)
    this.status = "Formulario enviado correctamente"
  }

  onDefaultForm(){
    this.defaultName = "Josue"
  }

  onSendEvent(){
    this.childEvent.emit("Enviando evento desde hijo hasta padre");
  }
}
