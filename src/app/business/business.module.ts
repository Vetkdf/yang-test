import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicModule } from '../public/public.module';
import { BusinessRoutingModule } from './business.routing.module';
import { CommonFunctionModule } from '../common/common.function.module';

import { A1Component } from './a1/a1.component';
import { M1v1Component } from './m1/m1v1/m1v1.component';
import { M1v2Component } from './m1/m1v2/m1v2.component';
import { M2v1Component } from './m2/m2v1/m2v1.component';
import { M2v2Component } from './m2/m2v2/m2v2.component';
import { M2v3Component } from './m2/m2v3/m2v3.component';
import { M2v4Component } from './m2/m2v4/m2v4.component';
import { M3v1Component } from './m3/m3v1/m3v1.component';
import { M3v2Component } from './m3/m3v2/m3v2.component';
import { M3v3Component } from './m3/m3v3/m3v3.component';
import { M3v4Component } from './m3/m3v4/m3v4.component';
import { M3v5Component } from './m3/m3v5/m3v5.component';
import { M3v6Component } from './m3/m3v6/m3v6.component';
import { M3v7Component } from './m3/m3v7/m3v7.component';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';

import { DataSvc } from './services/DataSvc';
import { PostService } from './services/post.service';
import { GetList } from './services/getlist';

import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { M2v2openComponent } from './m2/m2v2/m2v2open/m2v2open.component';
import { M2v3openComponent } from './m2/m2v3/m2v3open/m2v3open.component';

@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    BusinessRoutingModule,
    CommonFunctionModule,
    FormsModule,
    WjInputModule,
    WjGridModule,
    WjCoreModule,
    AlertModule,
    ModalModule,
  ],
  declarations: [
    A1Component,
    M1v1Component,
    M1v2Component,
    M2v1Component,
    M2v2Component,
    M2v3Component,
    M2v4Component,
    M3v1Component,
    M3v2Component,
    M3v3Component,
    M3v4Component,
    M3v5Component,
    M3v6Component,
    M3v7Component,
    M2v2openComponent,
    M2v3openComponent,
  ],
  providers: [DataSvc,PostService,GetList]
})
export class BusinessModule { }
