import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private static _currentUser;

  constructor() { }

  setCurrentUser(data) {
    AuthService._currentUser = data
    console.log("Setting current user:", AuthService._currentUser);
  }

  getCurrentUser() {
    return AuthService._currentUser;
  }

}
