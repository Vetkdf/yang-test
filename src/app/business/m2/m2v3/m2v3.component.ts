import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params }from'@angular/router';
import { GetList } from '../../services/getlist';
import * as wjCore from 'wijmo/wijmo';
import * as wjGrid from 'wijmo/wijmo.grid';
import { PageBackContent_M2V2 } from '../../../module/business/getlist';
import { M2v3openComponent } from '../m2v3/m2v3open/m2v3open.component';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m2v3',
  templateUrl: './m2v3.component.html',
  styleUrls: ['./m2v3.component.css']
})
export class M2v3Component implements OnInit {

  @ViewChild('m2v3open') public m2v3open:M2v3openComponent;
  @ViewChild('flexgrid1') public flexgrid1:wjGrid.FlexGrid;
  comIdList:PageBackContent_M2V2[];
  comId:string = '';

  private GetList: GetList;
  cvPaging: wjCore.CollectionView = new wjCore.CollectionView();
  pageNews:number[] = [];

  constructor(@Inject(GetList) getList: GetList,private route: ActivatedRoute,@Inject('title') private titleService) {
    this.GetList = getList;
    this.titleService.setTitle("类别详细页面");
  }

  ngOnInit() {
    this.flexgrid1.selectionMode = wjGrid.SelectionMode.Row;
    this.GetList.GetListPageBy_M2V3_List().
      then(backobj =>{
          this.comIdList = backobj;
          this.route.params.subscribe((params: Params) => {
            let urlId:string = params['id'];
            if(urlId == undefined || urlId == null ){
              this.comId =  this.comIdList[0].indexcode;
            }
            else{
              this.comId = urlId;
            }
          });
          this.selectchange(this.comId);
      });
      Auxiliary.prototype.ControlHeight();
  }

  onChange(classId){
    this.comId=classId;
    this.selectchange(this.comId);
  }

  selectchange(TypeId){
    this.bindpage(1);
  }

  //===================

  bindpage(event:number):void {
    let pageindex:number = event;
    if(pageindex == 0){ pageindex = this.pageNews[2];}
    this.GetList.GetListPageBy_M2V3(pageindex,this.comId).then(backobj =>{
      this.cvPaging.sourceCollection = backobj.List;
      this.pageNews = backobj.pageNews;
    });
  }

  itemFormatter(panel, r, c, cell) {
      if (panel.cellType === wjGrid.CellType.ColumnHeader) {
        cell.style.textAlign = 'center';
        if (panel.columns[c].binding === 'check') {
            let flex = panel.grid;
            let col = flex.columns[c];

            if (col.dataType == wjCore.DataType.Boolean) {
                col.allowSorting = false;// 是否可排序
                let cnt = 0;
                for (let i = 0; i < flex.rows.length; i++) {
                    if (flex.getCellData(i, c) == true) cnt++;
                    if(flex.getCellData(i, c + 7) === 1){
                      flex.rows[i].isReadOnly = true;
                    }
                }

                cell.innerHTML = '<input type="checkbox"> ';
                var cb = cell.firstChild;
                cb.checked = cnt > 0;
                cb.indeterminate = cnt > 0 && cnt < flex.rows.length;

                cb.addEventListener('click', function (e) {
                    flex.beginUpdate();
                    for (let i = 0; i < flex.rows.length; i++) {
                      //let v = flex.rows[i];
                      if(flex.rows[i].isReadOnly == false){
                        flex.setCellData(i, c, cb.checked);
                      }
                    }
                    flex.endUpdate();
                });
            }
        }
      }
      if (panel.cellType === wjGrid.CellType.Cell) {
        let cellData = panel.getCellData(r,c);
        let binding = panel.columns[c].binding;
        switch(binding){
          case 'id':
          //case 'indexcode':
          case 'isdel':
          case 'isdelandedit':
          case 'code':
          case 'orderid':
          case 'button':
          {
            /*
            switch(binding) {
              case 'isdelandedit':
                cell.style.color = cellData ==='已锁定' ? 'red':'green';
              break;
              case 'isdel':
                cell.style.color = cellData ==='禁用' ? 'red':'green';
              break;
              case 'button':
                //cell.innerHTML = '<input type="button" onclick="alert('+ cellData +')" text="编辑"/>';
                let cellData1 = panel.getCellData(r,c -1 );
                if(cellData1 === '可编辑'){
                  cell.innerHTML = '<a onclick="alert(\'主键是 ： '+cellData + '\')">编辑</a>';
                }
                else{
                  cell.innerHTML = '编辑'; //'<a href="javascript:void(0)"  disabled = "ture" >编辑</a>';
                }
              break;
            }
            */
            cell.style.textAlign = 'center';
          }
          break;
        }
      }
  }

  //================================================

  addnew():void{
    this.m2v3open.showChildModal(null,this.comId,true);
  }

  edit():void{
    let inId:number = 0;
    let typeid:number = 0;
    let flex:wjGrid.Row[] = this.flexgrid1.selectedRows as wjGrid.Row[];
    if(flex.length == 1){
      inId = flex[0].dataItem.id;
      typeid = 1;
      let isdelandedit:number = flex[0].dataItem.isdelandedit;
      if(isdelandedit == 1) typeid = 2;
    }
    switch(typeid){
      case 0:
        alert('没有选中行，请先选中行后修改');
      break;
      case 2:
        alert('选中行的主键是' + inId + '  但是本行状态位是已锁定，不可在编辑');
      break;
      case 1:
        //alert('选中行的主键是' + inId);
        this.m2v3open.showChildModal(flex[0].dataItem,this.comId,false);
      break;
    }
  }

  dellList():void{
    let flex:wjGrid.RowCollection = this.flexgrid1.rows;
    let checkboxAdd:number[] = [];
    for(let i = 0;i<flex.length;i++){
      let rowData = flex[i].dataItem;
      if(rowData.check == true){ checkboxAdd.push(rowData.id);}
    }
    if(checkboxAdd.length == 0) {
      alert('没有选择');
    }
    else {
      alert('您选择的主键为[' + checkboxAdd.join(",") + '] 业务操作自己去实现');
    }
  }

}
