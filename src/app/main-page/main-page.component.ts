import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  startTask() {
    this.httpClient.get(environment.baseUrl + '/start');
    this.router.navigate(['/task']);
  }
}
