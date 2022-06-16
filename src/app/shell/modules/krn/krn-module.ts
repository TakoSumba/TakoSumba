import {KrnComponent} from './krn.component';
import {OperationsComponent} from './operations/operations.component';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {AccountsComponent} from './accounts/accounts.component';
import {CreateAccountComponent} from './accounts/create-account/create-account.component';
import {AuthRoutingModule} from '../../../auth/auth-routing.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ShellModule} from '../../shell-module';
import {KrnRoutingModule} from './krn-routing.module';


@NgModule({

  declarations: [KrnComponent, OperationsComponent, KrnicpComponent,
    AccountsComponent, CreateAccountComponent],
  imports: [KrnRoutingModule, ShellModule, CommonModule, ReactiveFormsModule],
})
export class KrnModule {
}
