import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service'
import { LoginComponent } from '../login/login.component';
import { AuthEvent } from '../auth-event';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  username: string = '';

  constructor(private authClient: AuthService, private authEvList: AuthEvent) {
    this.authEvList.subscribe({
      next: data => {
        console.log(data);
        this.username = data.username;
      }
    });
  }

  ngOnInit() {

  }

  isLogged() {
    return true;
  }

}
