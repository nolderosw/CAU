import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatPaginatorModule} from '@angular/material';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { routing } from './app.routing';
import { AuthGuard } from './guards/auth-guard';

import Swal from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    LoginComponent,
    MenuComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    routing,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
