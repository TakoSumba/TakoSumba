import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellSidebarComponent } from './shell/shell-sidebar/shell-sidebar.component';
import { PopupDirective } from './shell/shell-header/popup.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BpmComponent } from './shell/modules/bpm/bpm.component';
import { Bpm000Component } from './shell/modules/bpm/bpm000/bpm000.component';
import { Bpm001Component } from './shell/modules/bpm/bpm001/bpm001.component';
import { KrnComponent } from './shell/modules/krn/krn.component';
import { KrnicpComponent } from './shell/modules/krn/krnicp/krnicp.component';
import { OperationsComponent } from './shell/modules/krn/operations/operations.component';
import { AccountsComponent } from './shell/modules/krn/accounts/accounts.component';
import { CreateAccountComponent } from './shell/modules/krn/accounts/create-account/create-account.component';
import { PmdComponent } from './shell/modules/pmd/pmd.component';
import { Pmd311Component } from './shell/modules/pmd/pmd311/pmd311.component';
import { SharedComponent } from './shared/shared.component';
import { ClientHeaderComponent } from './shell/client-header/client-header.component';
import { ActiveDirective } from './shell/client-header/active.directive';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ShellComponent,
    ShellHeaderComponent,
    ShellSidebarComponent,
    PopupDirective,
    LoginComponent,
    RegisterComponent,
    BpmComponent,
    Bpm000Component,
    Bpm001Component,
    KrnComponent,
    KrnicpComponent,
    OperationsComponent,
    AccountsComponent,
    CreateAccountComponent,
    PmdComponent,
    Pmd311Component,
    SharedComponent,
    ClientHeaderComponent,
    ActiveDirective,

  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
