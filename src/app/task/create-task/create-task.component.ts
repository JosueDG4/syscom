import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  createTask={
    name: "",
    description: "",
    usrname: localStorage.getItem("user")
  }

  public selectedFile: any = null;
  userLogger : any;

  
  constructor(private taskService: TaskService, private router: Router) { }

  onFileSelected(event: any){
    this.selectedFile = <File> event.target.files[0]
  }

  createUploadImage(){
    const fd = new FormData()
    fd.append('usrname', ""+localStorage.getItem("user"))
    fd.append('image', this.selectedFile, this.selectedFile.name)
    fd.append('name', this.createTask.name)
    fd.append('description', this.createTask.description)

    this.taskService.createImageUpload(fd)
      .subscribe(
        res => {
          this.router.navigate(["/tasks"])
        },
        err => console.log(err)
      )
  }

  ngOnInit(): void {
    this.userLogger = localStorage.getItem("user");
  }

  create(){
    this.taskService.createTask(this.createTask)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(["/tasks"]);
        },
        err => console.log(err)
      )
  }

  

  

  

}
