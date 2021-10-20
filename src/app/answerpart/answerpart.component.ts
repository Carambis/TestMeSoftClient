import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../task/service/task.service';

@Component({
  selector: 'app-answerpart',
  templateUrl: './answerpart.component.html',
  styleUrls: ['./answerpart.component.css']
})
export class AnswerpartComponent implements OnInit {

  @Input() questions: string[];
  selectedValue: string;
  @Input() openAnswer: boolean;
  @Input() taskRest: string;
  @Output() onchanged = new EventEmitter<boolean>();

  change(openAnswer: boolean) {
    this.onchanged.emit(openAnswer);
    this.openAnswer = openAnswer;
  }

  constructor(private httpService: TaskService) {
  }

  ngOnInit() {
  }

  saveAnswer() {
    this.httpService.addUserAnswer(this.taskRest, this.selectedValue);
  }
}
