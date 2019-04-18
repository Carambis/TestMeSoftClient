import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-checkbox-check',
  templateUrl: './checkbox-check.component.html',
  styleUrls: ['./checkbox-check.component.css'],
  providers: [HttpService]
})
export class CheckboxCheckComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'checkbox-check';
  selected: string[];

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  constructor(private httpService: HttpService) {
  }

  change(event) {
    this.selected = [event];
  }

}
