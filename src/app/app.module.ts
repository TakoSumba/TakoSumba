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
import {PlaceholderDirective} from './shared/placeholder.directive';
import {LoaderComponent} from './shared/loader/loader.component';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        SharedModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
