import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-unckeck-param',
  templateUrl: './unckeck-param.component.html',
  styleUrls: ['./unckeck-param.component.css'],
  providers: [HttpService]
})
export class UnckeckParamComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'uncheck-param';
  select = true;

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  constructor(private httpService: HttpService) {
  }
}
