import { Component, OnInit,Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QmAngular,BackCode,NewsList } from '../../../module/business/formdata';
import { PostService } from '../../services/post.service';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m1v1',
  templateUrl: './m1v1.component.html',
  styleUrls: ['./m1v1.component.css']
})
export class M1v1Component implements OnInit {

  typeList:any = [
        {id: 1, name: '单选A'},
        {id: 2, name: '单选B'},
        {id: 3, name: '单选C'},
        {id: 4, name: '单选D'},
  ];

  checkboxList:any = [
          {id: 1, name: '多选A'},
          {id: 2, name: '多选B'},
          {id: 3, name: '多选C'},
          {id: 4, name: '多选D'},
  ];

  comIdList:any = [
        {id: 1, name: '公司A'},
        {id: 2, name: '公司B'},
        {id: 3, name: '公司C'},
        {id: 4, name: '公司D'},
        {id: 5, name: '公司E'},
        {id: 6, name: '公司F'},
  ];

  //===========================
  //AOT编译需要用
  text1:string;
  textarea1:string;
  //===========================

  checkboxAdd:number[] = [];//多选框记录变量
  radio1:string = '0';//单选框选择变量
  comId:string = '';//单选下拉框
  comIdlist:string = '';//多选下拉框

  F : QmAngular = new QmAngular();
  title:string = '';

  private postservice : PostService;

  constructor(@Inject(PostService) postservice: PostService) {
    this.postservice = postservice;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.comId = '1';
    },1000);
    //this.comId = '1';
    Auxiliary.prototype.ControlHeight();
  }

  //==================================
  onChange(classId,flag){
      if(flag){
        if(this.checkboxAdd.length >0){
          let ii:number = this.checkboxAdd.indexOf(classId);
          if(ii <0) { this.checkboxAdd.push(classId); }
        }
        else{
          this.checkboxAdd.push(classId);
        }
      }
      else{
        if(this.checkboxAdd.length >0) {
          let ii:number = this.checkboxAdd.indexOf(classId);
          if(ii>=0) { this.removeByValue(this.checkboxAdd,classId); }
        }
      }
   }

  removeByValue(arr, val):void {
    for(let i=0; i<arr.length; i++) {
      if(arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  //==================================

  onSubmit(formValue:any):void {

    this.F.qmText = formValue.text1;
    this.F.qmTextarea = formValue.textarea1;
    this.F.qmCheckbox = this.checkboxAdd.join(',');
    //this.F.checkbox = this.checkbox_value;

    this.F.qmRadio = this.radio1;
    this.F.qmSelect = this.comId;
    this.F.qmSelectall = JSON.stringify(this.comIdlist);


    /*
    console.log("文本框：" + formValue.text1);
    console.log("多选文本框：" + formValue.textarea1);
    console.log("多选框：" + this.checkboxAdd.join(','));
    console.log("单选框：" + this.radio1);
    console.log("单选下拉框：" + this.comId);
    console.log("多选下拉框：" + this.comIdlist);
    */

    this.postservice.AddFormSSM(this.F).then( //this.F
      ub => {
        let show:string = '     服务端异常';
        if(ub.backCode == 1){
          show = '     写入远程数据库成功';
        }
        this.title = '表单提交数据：' + JSON.stringify(this.F) + show;
      }
    );
  }

}
