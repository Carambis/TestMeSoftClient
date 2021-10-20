import {Component, OnInit} from '@angular/core';
import {Task} from '../../entity/Task';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
  providers: [TaskService]
})
export class CursorComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'cursor';

  constructor(private httpService: TaskService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
