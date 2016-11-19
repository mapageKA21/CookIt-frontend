import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService, AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private apiClient: ApiService, private authClient: AuthService) { }

  status = '';

  ngOnInit() {
  }

  login(user: string,pass: string): void {
    if (pass === '') this.status = 'Password can not be empty.'
    else if (user === '') this.status = 'Username can not be empty.'
    this.apiClient.signin(user,pass)
    .then((data) => {
      window.location.href = '/'
    })
    .catch((err) => {
      console.log('error auth '+ err);
    });
  }

}
