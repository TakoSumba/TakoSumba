import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { PlaceholderDirective } from './placeholder.directive';
import {ToFixed} from './toFixed.pipe';

@NgModule({
  declarations: [AlertComponent, LoaderComponent, PlaceholderDirective, ToFixed],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    LoaderComponent,
    PlaceholderDirective,
    CommonModule,
    ReactiveFormsModule,
    ToFixed
  ],
})
export class SharedModule {}
