import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLoggedIn: boolean = false;

  constructor() { }

  setUserLoggedIn(){
    this.isUserLoggedIn = true
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }

  getIsUserLoggedIn(){
    return this.isUserLoggedIn
  }
}
