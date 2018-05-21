import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //definição dos membros
  private authenticated: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();
  router;
  userService;
  currentUser;

  constructor(private _router: Router, private _userService: UserService) { //utilizando serviços de rota e usuário
    this.router = _router;
    this.userService = _userService;
  }
  login(user) { //definição da função para realização de login
    let users = this.userService.getUsers();
    let foundUser = false;
    users.forEach(current => {
      if(current.username == user.username){
        if (current.password == user.password) {
          this.authenticated = true;
          this.showMenuEmitter.emit(true); //emit responsavel por mostrar ou não o menu
          this.router.navigate(['/']);
          this.currentUser = current;
          foundUser = true;
          return
        }
        Swal({
          type: 'error',
          title: 'Erro ao tentar entrar...',
          text: 'Senha incorreta!',
        })
        foundUser = true;
        return
      }
    });
    if(!foundUser){
      Swal({
        type: 'error',
        title: 'Erro ao tentar entrar...',
        text: 'Usuário não existe!',
      })
    }
  
  }
  logout() { //definição da função de realização de logout
    this.authenticated = false;
    this.showMenuEmitter.emit(false); //emit responsavel por mostrar ou n o menu
    this.router.navigate(['/login']);
  }
  getCurrentUser() {
    return this.currentUser;
  }
  getAuthenticated() {
    return this.authenticated;
  }
}
