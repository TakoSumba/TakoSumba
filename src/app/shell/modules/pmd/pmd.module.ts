import {PmdComponent} from './pmd.component';
import {Pmd311Component} from './pmd311/pmd311.component';
import {PmdRoutingModule} from './pmd-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShellModule} from '../../shell-module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [PmdComponent, Pmd311Component],
  imports: [PmdRoutingModule, ShellModule, CommonModule, ReactiveFormsModule, SharedModule]
})

export class PmdModule {
}
