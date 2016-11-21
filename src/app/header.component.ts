import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service'
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  constructor(private authClient: AuthService) { }

  ngOnInit() {
  }

}
