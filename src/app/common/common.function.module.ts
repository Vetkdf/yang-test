import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalformComponent } from './component/modalform/modalform.component';
import { ModalService } from './services/modal.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
  ],
  declarations: [
    ModalformComponent,
  ],
  exports: [
    ModalformComponent,
  ],
  providers: [
    ModalService,
  ]
})
export class CommonFunctionModule {}
