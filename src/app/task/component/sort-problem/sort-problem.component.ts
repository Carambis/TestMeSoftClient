import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';
import {SortEvent} from 'primeng/api';
import {Town} from './town';

@Component({
  selector: 'app-sort-problem',
  templateUrl: './sort-problem.component.html',
  styleUrls: ['./sort-problem.component.css'],
  providers: [HttpService]
})
export class SortProblemComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'sort-problem';
  cols: any[];
  towns: Town[];

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
    this.cols = [
      {field: 'townName', header: 'Название города'},
      {field: 'population', header: 'Насетеление, чел'},
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

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }

      return (event.order * result);
    });
  }
}
