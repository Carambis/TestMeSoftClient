import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-alignment',
  templateUrl: './alignment.component.html',
  styleUrls: ['./alignment.component.css'],
  providers: [HttpService]
})
export class AlignmentComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'alignment';

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

}
