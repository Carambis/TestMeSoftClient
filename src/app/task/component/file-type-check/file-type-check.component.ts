import {Component, OnInit} from '@angular/core';
import {Task} from '../../entity/Task';
import {TaskService} from '../../service/task.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-file-type-check',
  templateUrl: './file-type-check.component.html',
  styleUrls: ['./file-type-check.component.css'],
  providers: [MessageService, TaskService]
})
export class FileTypeCheckComponent implements OnInit {

  openAnswer = false;
  task: Task = new Task();
  taskRest = 'file-type-check';
  uploadedFiles: any[] = [];

  ngOnInit() {
    this.httpService.initTask(this.taskRest).subscribe((data: Task) => this.task = data);
  }

  constructor(private httpService: TaskService,
              private messageService: MessageService) {
  }

  myUploader(event, form) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
      this.messageService.add({severity: 'info', summary: 'Файл загуржен', detail: ''});

    }
    this.uploadedFiles = [];
    form.clear();
  }

}
