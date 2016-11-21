import { Component } from '@angular/core';

import { AuthService } from './auth.service'
import { MainComponent } from './main.component';

@Component({
  selector: 'app-root',  // works like a CSS selector
  templateUrl: 'app.component.html',
  providers: [AuthService]
})

export class AppComponent {
  constructor(
    private authClient: AuthService,
  ) { }
}
