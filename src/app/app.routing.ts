import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthGuard } from './guards/auth-guard';


const APP_ROUTES: Routes = [
    { path: '', component: ListUsersComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateUserComponent, canActivate: [AuthGuard] },
    { path: '**', component: ListUsersComponent, canActivate: [AuthGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);