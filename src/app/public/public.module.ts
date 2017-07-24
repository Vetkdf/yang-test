import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { PublicRoutingModule } from './public.routing.module';

import { LoginComponent } from './login/login.component';
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
    providers: [
    { provide: 'auth', useClass: AuthService },
    ]
})
export class PublicModule { }
