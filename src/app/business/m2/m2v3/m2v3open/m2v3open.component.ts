import { Component, OnInit,ViewChild,Input,Inject,Output,EventEmitter } from '@angular/core';
import { ModalformComponent } from '../../../../common/component/modalform/modalform.component';
import * as Modal from 'ngx-bootstrap/modal';
import { ModalDirective,ModalModule,ModalOptions } from 'ngx-bootstrap/modal';
import { GetList } from '../../../services/getlist';
import { FormsModule } from '@angular/forms';
import { PageBackContent_M2V3} from '../../../../module/getlist';

@Component({
  selector: 'app-m2v3open',
  templateUrl: './m2v3open.component.html',
  styleUrls: ['./m2v3open.component.css']
})
export class M2v3openComponent implements OnInit {

  private GetList: GetList;
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() Title: string = '表单模板页';
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  text1:string;
  text2:string;
  textarea1:string;
  ShowType:string = '编辑';
  radio:number = 0;
  IsAdd:boolean = true;
  typeList:any = [
        {id: 0, name: '启用'},
        {id: 1, name: '禁用'},
  ];

  P:PageBackContent_M2V3 = new PageBackContent_M2V3();
  Post:PageBackContent_M2V3 = new PageBackContent_M2V3();

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

  public showChildModal(dataItem:any,code:string,isAdd:boolean):void {
    if(isAdd) {
      this.ShowType = '新增';
      this.IsAdd = true;
      this.P.id = null;
      this.P.code = null;
      this.P.isdel = null;
      this.P.isdelandedit = null;
      this.P.name = null;
      this.P.remark = null;
      this.P.orderid = null;
      this.P.indexcode = code;
      this.GetList.GetSequenceCode(0,1).
        then(backobj =>{
             this.P.code = backobj.toString();
        });
    }
    else {
      this.ShowType = '编辑';
      this.P.id = dataItem.id;
      this.P.code = dataItem.code;
      this.P.isdel = dataItem.isdel;
      this.P.isdelandedit = dataItem.isdelandedit;
      this.P.name = dataItem.name;
      this.P.remark = dataItem.remark;
      this.P.orderid = dataItem.orderid;

      this.IsAdd = false;
      this.radio = this.P.isdel;
    }
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public onSubmit(formValue:any):void {

    this.Post.code = formValue.text1;
    this.Post.name = formValue.text2;
    this.Post.remark = formValue.textarea1;
    this.Post.orderid = formValue.text3;
    this.Post.isdel = this.radio;
    this.Post.indexcode = this.P.indexcode;
    if(this.IsAdd==false) {
      this.Post.id = this.P.id;
    }

    this.GetList.Form_M2V3(this.Post,this.IsAdd).then(
      ub => {
        //let show:string = '     服务端异常';
        if(ub.backCode == 1){
          if(this.IsAdd){ this.GetList.GetSequenceCode(0,0).then(backobj =>{ });}
          this.change.emit();
          this.hideChildModal();
        }
        else {
          if(this.IsAdd){
            alert('添加失败！');
          }
          else{
            alert('修改失败！');
          }
        }
      }
    );
  }
}
