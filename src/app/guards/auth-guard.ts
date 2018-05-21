import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  //definição dos membros
  authService;
  router;

  constructor(private _authService: AuthService, private _router: Router) { //utilizando os servicos de autenticação e rota
    this.authService = _authService;
    this.router = _router;
  }

  canActivate( //utilizando o canActivate para acessar as rotas apenas se estiver autenticado
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean{
    if(this.authService.getAuthenticated()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false
    }
  }
}
