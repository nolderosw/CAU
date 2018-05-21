import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  //definição dos membros
  userService;
  user: any = {}
  router;

  constructor(private _userService: UserService, private _router: Router) {
    this.userService = _userService;  //utilizando o serviços de usuario e rota
    this.router = _router;
  }
    
  ngOnInit() {
  }


  createUser(user){
    if(this.userService.addUser(user) != 'error'){
      this.router.navigate(['/']);
    }
  }

}
