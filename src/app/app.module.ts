import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PopupDirective} from './shell/shell-header/popup.directive';

import {AuthModule} from './auth/auth.module';
import {ShellModule} from './shell/shell-module';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core.module';
import {AlertComponent} from './shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupDirective,
    AlertComponent

  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AuthModule,
        ShellModule,
        HttpClientModule,
        CoreModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
