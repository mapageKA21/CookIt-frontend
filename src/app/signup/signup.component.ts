import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ApiService, AuthService]
})
export class SignupComponent implements OnInit {

  status = '';

  constructor(
    private apiClient: ApiService,
    private authClient: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup(user: string,pass1: string, pass2: string): void {
    if (pass1 !== pass2) this.status = 'Passwords do not match.';
    else if (user === '') this.status = 'Username can not be empty.';
    else if (pass1 === '') this.status = 'Passwords can not be empty.'
    else {
      this.apiClient.signup(user,pass1)
      .then((data) => {
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

}
