import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService, AuthService]
})
export class LoginComponent implements OnInit {

  // private id: string;

  constructor(
    private apiClient: ApiService,
    private authClient: AuthService,
    // private route: ActivatedRoute,
    private router: Router
  ) {
    // route.params.subscribe(_ => this.id = _.id);
  }

  status = '';

  ngOnInit() {
  }

  login(user: string,pass: string): void {
    this.status='';
    if (pass === '') this.status = 'Password can not be empty.'
    else if (user === '') this.status = 'Username can not be empty.'
    this.apiClient.signin(user,pass)
    .then((data) => {
      // window.location.href = '/';
      this.router.navigate(['/']);
    })
    .catch((err) => {
      if (err._body) {
        let body = JSON.parse(err._body);
        if (body.error) this.status = body.error;
      }
    });
  }

}
