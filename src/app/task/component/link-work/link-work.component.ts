import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-link-work',
  templateUrl: './link-work.component.html',
  styleUrls: ['./link-work.component.css'],
  providers: [HttpService]
})
export class LinkWorkComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'link-work';

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  constructor(private httpService: HttpService) {
  }
}
