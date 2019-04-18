import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-radionbutton-check',
  templateUrl: './radiobutton-check.component.html',
  styleUrls: ['./radiobutton-check.component.css'],
  providers: [HttpService]
})
export class RadiobuttonCheckComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'radiobutton-check';

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  constructor(private httpService: HttpService) {
  }
}
