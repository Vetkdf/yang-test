import { Component, OnInit,ViewChild,Input,Inject } from '@angular/core';
import { ModalformComponent } from '../../../../common/component/modalform/modalform.component';
import * as Modal from 'ngx-bootstrap/modal';
import { ModalDirective,ModalModule,ModalOptions } from 'ngx-bootstrap/modal';
import { GetList } from '../../../services/getlist';

@Component({
  selector: 'app-m2v2open',
  templateUrl: './m2v2open.component.html',
  styleUrls: ['./m2v2open.component.css']
})
export class M2v2openComponent implements OnInit {

  private GetList: GetList;
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() Title: string = '表单模板页';
  text1:string;
  text2:string;
  textarea1:string;
  ShowType:string = '编辑';
  showT:string;
  radio:string = '0';//单选框选择变量
  radio1:string = '0';//单选框选择变量
  typeList:any = [
        {id: 0, name: '启用'},
        {id: 1, name: '禁用'},
  ];
  typeList1:any = [
        {id: 0, name: '可编辑'},
        {id: 1, name: '已锁定'},
  ];

  constructor(@Inject(GetList) getList: GetList) {
    this.GetList = getList;
  }

  ngOnInit() {

    /*
    this.GetList.GetSequenceCode(1,1).
      then(backobj =>{
           alert(backobj.toString());
      });
    */

  }

  public showChildModal(dataItem:any):void {
    if(dataItem == null) {
      this.ShowType = '新增';
      this.showT = null;
    }
    else {
      this.ShowType = '编辑';
      this.showT = 'indexcode = ' + dataItem.indexcode +
      ' id =' + dataItem.id +
      ' indexname =' + dataItem.indexname +
      ' indexremark =' + dataItem.indexremark ;
    }
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public onSubmit(formValue:any):void {
    alert(formValue.text1);
  }

}
