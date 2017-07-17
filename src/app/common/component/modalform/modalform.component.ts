import { Component,OnInit,ViewChild,Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})
export class ModalformComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() Title: string = '表单模板页';

  constructor() { }

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
