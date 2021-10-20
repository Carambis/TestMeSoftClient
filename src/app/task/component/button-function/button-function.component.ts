import {Component, OnInit} from '@angular/core';
import {Task} from '../entity/Task';
import {HttpService} from '../http.service';
import {User} from '../../user';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-button-function',
  templateUrl: './button-function.component.html',
  styleUrls: ['./button-function.component.css'],
  providers: [MessageService, HttpService]
})
export class ButtonFunctionComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'button-function';
  user: User = new User();

  constructor(private httpService: HttpService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  clear() {
    this.user = new User();
    this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Поля очищенны'});
  }

}
