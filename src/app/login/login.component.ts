import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../user';
import {Responce} from '../Responce';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  user: User = new User();

  ngOnInit() {
  }

  startTask() {
    this.httpClient.post(environment.baseUrl + 'user-service/login', this.user).subscribe((data: Responce) => {
      sessionStorage.setItem('access_token', data.data);
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
