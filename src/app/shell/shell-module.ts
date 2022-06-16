import {NgModule} from '@angular/core';


import {ShellRoutingModule} from './shell-routing.module';
import {ShellComponent} from './shell.component';
import {ShellHeaderComponent} from './shell-header/shell-header.component';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {ClientHeaderComponent} from './client-header/client-header.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ShellComponent, ShellHeaderComponent, ClientHeaderComponent, ShellSidebarComponent ],
  imports: [ShellRoutingModule, CommonModule],
  exports: [ClientHeaderComponent]
})

export class ShellModule {}
