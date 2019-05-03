import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from '../task/http.service';

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

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.questions = [
      '12r1241kjsdkjsdfslmgsdlmg', 'asjkfasjkfsahjfsakjfkjasfksak', 'jhsdjksajgsdhgsd'
    ];
  }

  saveAnswer() {
    this.httpService.addUserAnswer(this.taskRest, this.selectedValue);
  }
}
