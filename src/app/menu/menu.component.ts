import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //definição dos membros
  authService;
  currentUser;

  constructor(_authService: AuthService) { 
    this.authService = _authService; //utilizando o serviço de autenticação
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser(); //pegando o usuário logando do momento
  }
  logout(){
    this.authService.logout(); //realizando logout
  } 

}
