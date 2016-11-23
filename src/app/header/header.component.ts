import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service'
import { LoginComponent } from '../login/login.component';
import { AuthEvent } from '../auth-event';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AuthService, ApiService]
})
export class HeaderComponent implements OnInit {

  username: string = '';

  constructor(
    private authClient: AuthService,
    private authEvList: AuthEvent,
    private apiClient: ApiService
  ) {
    this.authEvList.subscribe({
      next: data => {
        this.username = data.username;
      }
    });
  }

  ngOnInit() {

  }

  search(terms: string) {
      this.apiClient.getRecipes(terms);
  }

}
