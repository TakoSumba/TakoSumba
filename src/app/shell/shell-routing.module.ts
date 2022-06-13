import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShellComponent} from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
  {
    path: 'bpm',
    loadChildren: () =>
      import('./modules/bpm/bpm-module').then((m) => m.BpmModule),
  },
  {
    path: 'krn',
    loadChildren: () =>
      import('./modules/krn/krn-module').then((m) => m.KrnModule),
  },
  {
    path: 'pmd',
    loadChildren: () =>
      import('./modules/pmd/pmd.module').then((m) => m.PmdModule),
  }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class ShellRoutingModule {}
