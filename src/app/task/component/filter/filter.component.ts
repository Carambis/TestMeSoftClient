import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {Town} from '../sort-problem/town';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [HttpService]
})
export class FilterComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'filter';
  cols: any[];
  towns: Town[];

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
    this.cols = [
      {field: 'townName', header: 'Название города'},
      {field: 'population', header: 'Население, чел'},
      {field: 'popDensity', header: 'Плотность населения, чел/км2'}
    ];

    this.towns = [
      {townName: 'Минск', population: 1974819, popDensity: '5509'},
      {townName: 'Москва', population: 12615882, popDensity: '4925,19'},
      {townName: 'Нью-Йорк', population: 8405837, popDensity: '10654'},
      {townName: 'Сиэтл', population: 608660, popDensity: '1672'},
      {townName: 'Сингапур', population: 5889117, popDensity: '8151,0269'},
      {townName: 'Пекин', population: 21705000, popDensity: '1292'},
      {townName: 'Токио', population: 13742906, popDensity: '6279,11'},
    ];
  }

  constructor(private httpService: HttpService) {
  }
}
