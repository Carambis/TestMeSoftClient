import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
  providers: [HttpService]
})
export class CursorComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'cursor';

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
