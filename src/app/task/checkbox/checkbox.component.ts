import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [HttpService]
})
export class CheckboxComponent implements OnInit {
  openAnswer = false;
  task: Task = new Task();
  taskRest = 'checkbox';
  enter: string;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
