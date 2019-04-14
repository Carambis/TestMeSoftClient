import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Responce} from '../Responce';
import {User} from '../user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  user: User = new User();
  responce: Responce = new Responce();

  ngOnInit() {
  }

  startTask() {
    this.httpClient.post(environment.baseUrl + 'user-service/login', this.user).subscribe((data: Responce) => {
      sessionStorage.setItem('access_token', data.data);
      // this.router.navigate(['/task']);
      this.httpClient.get(environment.baseUrl + 'task-service/startTest', {
        headers: new HttpHeaders({
          token: sessionStorage.getItem('access_token')
        })
      }).subscribe((value) => {
          this.router.navigate(['/task']);
        }
      );
    });

  }
}
