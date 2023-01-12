import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../utils/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private loginService: LoginService) {}

  isUserLoggedIn: boolean = this.loginService.getIsUserLoggedIn();

  userLoggedIn() {
    this.loginService.setUserLoggedIn();
    this.isUserLoggedIn = this.loginService.getIsUserLoggedIn();
  }

  userLoggedOut() {
    this.loginService.setUserLoggedOut();
    this.isUserLoggedIn = this.loginService.getIsUserLoggedIn();
  }
}
