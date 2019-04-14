import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../commonHttp';

@Component({
  selector: 'app-grammar-task',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  selectedValue: string;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask('grammar').subscribe((data: Task) => this.task = data);
  }

}
