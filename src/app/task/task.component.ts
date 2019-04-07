import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.router.navigate(['/task/grammar'], {
      skipLocationChange: true
    });
  }

}
