import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [HttpService]
})
export class LocationComponent implements OnInit {


  text: string;

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'location';

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  size() {
    if (this.text != null && this.text.length > 30) {
      return this.text.substring(30, this.text.length);
    }
  }

}
