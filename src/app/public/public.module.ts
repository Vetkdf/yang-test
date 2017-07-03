import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public.routing.module';

import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { TopComponent } from './top/top.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    PublicComponent,
    TopComponent,
    TreeviewComponent,
    FooterComponent,
    NavigationComponent,
    PagingComponent,
  ],
  exports: [
    TopComponent,
    TreeviewComponent,
    FooterComponent,
    NavigationComponent,
    PagingComponent,
    ],
})
export class PublicModule { }
