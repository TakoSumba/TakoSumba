import { NgModule } from '@angular/core';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [ SharedModule, AuthRoutingModule, CommonModule, ReactiveFormsModule],
})

export class AuthModule {}
