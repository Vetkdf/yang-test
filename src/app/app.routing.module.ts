import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'business',
    pathMatch: 'full'
  },
  /*
  {
    path: 'business',
    redirectTo: 'business/',
    pathMatch: 'full',
  },
  */
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
