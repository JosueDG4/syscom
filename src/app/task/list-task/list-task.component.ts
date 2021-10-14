import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks = [{name: "", status: "", description:"", imageUrl: "", usrname: localStorage.getItem('user')}]
    

  constructor(private taskService: TaskService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.taskService.getTasks()
    .subscribe(
      res => {
        this.tasks = res;
      },
      err => console.log(err)
    )
  }

  changeStatus(selectTask: any, status: any){
      const temporalStatus = selectTask.status
      selectTask.status = status
      this.taskService.updateTask(selectTask)
        .subscribe(
          res=>{
            selectTask.status = status
          },
          err=>{
            console.log(err)
            selectTask.status = temporalStatus       
          }
        )
  }


  delete(deleteTask: any){
    this.taskService.deleteTask(deleteTask)
      .subscribe(
        res=>{
          const index = this.tasks.indexOf(deleteTask)
          if(index>-1){
            this.tasks.splice(index,1)  
            this.snackBar.open("Tarea Eliminada con Exito!","Otro", {
              duration: 8000
            })
          }
        },
        err=>{
          console.log(err)
          
        }
      )
  }
}
