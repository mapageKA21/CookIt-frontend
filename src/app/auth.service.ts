import { Injectable } from '@angular/core';
import { AuthEvent } from './auth-event';

@Injectable()
export class AuthService {
  private static _currentUser;

  constructor(private authEvList: AuthEvent) {

  }

  setCurrentUser(data) {
    AuthService._currentUser = data;
    this.authEvList.next(data);
    console.log("Setting current user:", AuthService._currentUser);
  }

  getCurrentUser() {
    return AuthService._currentUser;
  }

}
