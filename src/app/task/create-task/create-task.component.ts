import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  createTask={
    name: "",
    description: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  create(){

  }

}