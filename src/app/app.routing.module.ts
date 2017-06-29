import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessModule } from './business/business.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'business/A1',
    pathMatch: 'full'
  },
  /*
  {
    path: 'business',
    loadChildren: './app/business/business.module#BusinessModule',
  },
  */
  {
    path: 'business',
    redirectTo: 'business/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
