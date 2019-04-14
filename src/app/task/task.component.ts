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

  private nextTaskId: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.getNextTask();
  }

  getNextTask() {
    this.http.get(environment.baseUrl + 'task-service/getNextTask', {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('access_token')
      }), responseType: 'text'
    }).subscribe((data: string) => {
      if (data === 'finalTask') {
        // TODO do this http
        this.http.get(environment.baseUrl + 'task_service/getResult');
      } else {
        this.router.navigate(['/task/' + data], {
          skipLocationChange: true
        });
      }
    });
  }

}
