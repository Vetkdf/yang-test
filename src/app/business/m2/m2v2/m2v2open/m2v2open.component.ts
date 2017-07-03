import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { ModalformComponent } from '../../../../common/component/modalform/modalform.component';
import * as Modal from 'ngx-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-m2v2open',
  templateUrl: './m2v2open.component.html',
  styleUrls: ['./m2v2open.component.css']
})
export class M2v2openComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() Title: string = '表单模板页';

  constructor() { } //private modalService: Modal.ModalDirective

  ngOnInit() {

  }

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public onSubmit(formValue:any):void {
    alert(formValue.text1);

  }

}
