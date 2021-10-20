import {Component, OnInit} from '@angular/core';
import {Task} from '../../entity/Task';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-alignment',
  templateUrl: './alignment.component.html',
  styleUrls: ['./alignment.component.css'],
  providers: [TaskService]
})
export class AlignmentComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'alignment';

  constructor(private httpService: TaskService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
