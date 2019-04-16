import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-grammar-task',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css'],
  providers: [HttpService]
})
export class GrammarComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'grammar';
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  onChanged(openAnswer: boolean) {
    this.openAnswer = openAnswer;
  }
}
