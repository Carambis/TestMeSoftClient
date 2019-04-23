import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-form-problem',
  templateUrl: './form-problem.component.html',
  styleUrls: ['./form-problem.component.css']
})
export class FormProblemComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'form-problem';

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
