import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private nextTaskId: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.baseUrl + 'getNextTask').subscribe((data: string) => this.nextTaskId = data);
    this.router.navigate(['/task/nextTaskId'], {
      skipLocationChange: true
    });
  }

}
