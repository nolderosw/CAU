import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //definição dos membros
  user: any = {};
  authService;

  constructor(private _authService: AuthService) { 
    this.authService = _authService; //utilizando o serviço de autenticação
  }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user); //realizando login
  }

}
