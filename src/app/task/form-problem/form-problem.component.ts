import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-form-problem',
  templateUrl: './form-problem.component.html',
  styleUrls: ['./form-problem.component.css'],
  providers: [MessageService, HttpService]
})
export class FormProblemComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'form-problem';
  name: string;
  groupNumber: string;
  mesName = false;
  grNumber = false;

  constructor(private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  validate() {
    this.mesName = this.name == null || this.name.length === 0;
    this.grNumber = this.groupNumber == null || this.groupNumber.length === 0;
    this.name = '';
    this.groupNumber = '';
  }
}
