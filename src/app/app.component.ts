import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Главная',
        routerLink: ['home']
      },
      {
        label: 'Теория',
        routerLink: ['theory']
      },
      {
        label: 'Инструкция',
        routerLink: ['instruction']
      }
    ];
  }
}
