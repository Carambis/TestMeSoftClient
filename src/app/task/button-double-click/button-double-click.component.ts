import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-button-double-click',
  templateUrl: './button-double-click.component.html',
  styleUrls: ['./button-double-click.component.css'],
  providers: [HttpService]
})
export class ButtonDoubleClickComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'button-double-click';
  hide = false;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
