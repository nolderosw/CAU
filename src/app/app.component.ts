import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userService;
  authService;
  showMenu: boolean = false;

  constructor(private _userService: UserService, private _authService: AuthService){
    this.userService = _userService;
    this.authService = _authService;
  }
  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

}
