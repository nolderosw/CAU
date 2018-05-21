import {Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  //definição dos membros
  @ViewChild(MatPaginator) paginator: MatPaginator;
  usuarios: Object [] = [];
  userService;
  users;
  
  constructor(private _userService: UserService){
    this.userService = _userService; //utilizando o serviço de usuario
  }

  ngOnInit() {
    this.usuarios = this.userService.getUsers(); //carrega os usuarios
    this.users = new MatTableDataSource(this.usuarios); //carrega os usuarios na tabela
    //setando o paginator
    this.users.paginator = this.paginator;
    //tradrução do paginator
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.firstPageLabel = 'Primeira página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
  }
  //definição das colunas que serão exibidas
  displayedColumns = ['tipo','nome', 'email', 'username'];
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // removendo espaços em branco
    filterValue = filterValue.toLowerCase(); // MatTableDataSource tem por default tudo lowerCase
    this.users.filter = filterValue; //aplicando o filtro
  }
}
