import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginPage},
];

@NgModule({
  declarations: [
    LoginPage,
    LoginFormComponent,
    RegisterFormComponent,
    PasswordFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginPageModule { }
