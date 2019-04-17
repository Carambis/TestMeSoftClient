import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {City} from './city.component';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-illumination',
  templateUrl: './illumination.component.html',
  styleUrls: ['./illumination.component.css'],
  providers: [HttpService]
})

export class IlluminationComponent implements OnInit {
  cities: City[];

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'illumination';

  constructor(private httpService: HttpService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }
}
