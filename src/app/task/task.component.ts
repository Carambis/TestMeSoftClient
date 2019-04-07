import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './Task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  task: Task;

  ngOnInit() {
    this.router.navigate(['/task', '1'], {
      skipLocationChange: true
    });
  }

}
