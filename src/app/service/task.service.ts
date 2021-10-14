import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /*private listTaskUrl = "http://localhost:8080/api/task/list/"
  private taskUrl = "http://localhost:8080/api/task"
  private taskImageUploadUrl = "http://localhost:8080/api/task/upload"*/
  private listTaskUrl = "https://spring-app2-heroku.herokuapp.com/api/task/list/"
  private taskUrl = "https://spring-app2-heroku.herokuapp.com/api/task"
  private taskImageUploadUrl = "https://spring-app2-heroku.herokuapp.com/api/task/upload"

  constructor(private httpCient: HttpClient) { }

  createImageUpload (task: any){
    return this.httpCient.post<any>(this.taskImageUploadUrl, task)
  }

  createTask(task: any){
    return this.httpCient.post<any>(this.taskUrl, task)
  }

  updateTask(task: any){
    return this.httpCient.put<any>(this.taskUrl, task)
  }

  deleteTask(task: any){
    return this.httpCient.delete(this.taskUrl+"/"+task.id)
  }

  getTasks(){
    return this.httpCient.get<any>(this.listTaskUrl+localStorage.getItem('user'))
  }
}
