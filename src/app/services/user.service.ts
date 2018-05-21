import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //definição dos membros
  users = [{tipo: 'ADMIN', nome: 'admin', email: 'wesley150wow@gmail.com', username: 'admin', password:'admin'}];

  constructor() {

  }

  getUsers() {
    return this.users;
  }
  addUser(user) { //função que adiciona um novo user
    var error = false;
    this.users.forEach(current => {
      if(current.username == user.username){
        Swal({
          type: 'error',
          title: 'Erro ao cadastrar usuário!',
          text: 'Login já existe!',
        })
        error = true;
        return
      }
      else if(current.email == user.email){
        Swal({
          type: 'error',
          title: 'Erro ao cadastrar usuário!',
          text: 'Email já cadastrado!',
        })
        error = true;
        return
      }
    });
    if (!error) {
      this.users.push(user);
      Swal({
        type: 'success',
        title: 'Cadastrado!',
        text: 'Usuário cadastrado com sucesso! Verifique a lista de usuários cadastrados.',
      })
    }
    else{
      return 'error'
    }
  }
}
