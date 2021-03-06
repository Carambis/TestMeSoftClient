import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const taskRest = sessionStorage.getItem('current_task_rest');
    if (taskRest == null || taskRest.length === 0) {
      this.getNextTask();
    }
  }

  getNextTask() {
    this.http.get(environment.baseUrl + 'task-service/getNextTask', {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('access_token')
      }), responseType: 'text'
    }).subscribe((data: string) => {
      if (data === 'finishTest') {
        this.router.navigate(['/result']);
        sessionStorage.setItem('current_task_rest', '/result');
      } else {
        this.router.navigate(['/task/' + data], {
          skipLocationChange: true
        });
        sessionStorage.setItem('current_task_rest', data);
      }
    });
  }

}
