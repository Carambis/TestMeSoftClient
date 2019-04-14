import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {TaskComponent} from './task.component';

@Injectable()
export class HttpService {

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

  aproveAnswer(taskRest: string, answer: string) {
    this.http.post(environment.baseUrl + 'task-service/saveAnswer', null, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('access_token')
      }),
      params: new HttpParams().set('taskRest', taskRest).set('answer', answer)
    }).subscribe();
    this.taskComponent.getNextTask();
  }

}
