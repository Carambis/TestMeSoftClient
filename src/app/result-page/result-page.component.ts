import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AnswerStatistic} from './result';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  answer: AnswerStatistic;
  allRight: number;
  allQuestion: number;
  procRight: number;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(environment.baseUrl + 'task-service/getResult', {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('access_token')
      })
    }).subscribe((data: AnswerStatistic) => {
      this.answer = data;
      this.allRight = this.answer.results[0].countRight + this.answer.results[1].countRight;
      this.allQuestion = this.answer.results[0].allCount + this.answer.results[1].allCount;
      this.procRight = this.allRight / this.allQuestion * 100;
    });
  }


}
