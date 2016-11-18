import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _currentUser = {}

  constructor() { }

  setCurrentUser(data) {
    console.log("Setting current user:", data);
    this._currentUser = data
  }

  getCurrentUser() {
    return this._currentUser;
  }

}
