import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {TaskComponent} from '../task.component';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient,
              private router: Router,
              private taskComponent: TaskComponent) {

  }

  initTask(taskRest: string) {
    return this.http.post(environment.baseUrl + 'task-service/getTask', null, {
      headers: new HttpHeaders(
        {
          token: sessionStorage.getItem('access_token')
        }
      ),
      params: new HttpParams().set('taskRest', taskRest)
    });
  }

  addUserAnswer(taskRest: string, answer: string) {
    return this.http.post(environment.baseUrl + 'task-service/saveAnswer', null, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('access_token')
      }),
      params: new HttpParams().set('taskRest', taskRest).set('answer', answer)
    });
    // this.taskComponent.getNextTask();
  }

  getNextTask() {
    return this.http.get(environment.baseUrl + 'task-service/getNextTask', {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('access_token')
      }), responseType: 'text'
    });
  }

}
