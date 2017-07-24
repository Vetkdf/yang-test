import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetList } from '../../services/getlist';

import * as wjCore from 'wijmo/wijmo';
import * as wjInput from 'wijmo/wijmo.input';
import * as wjGrid from 'wijmo/wijmo.grid';

//import { ModalformComponent } from '../../../common/component/modalform/modalform.component';
import { M2v2openComponent } from './m2v2open/m2v2open.component';
import { Auxiliary } from '../../../common/constants/auxiliary';
//import * as wj2Core from 'wijmo/wijmo.angular2.core';
//import * as wj2Input from 'wijmo/wijmo.angular2.input';
//import * as wj2Grid from 'wijmo/wijmo.angular2.grid';

//import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
//import { WjInputModule } from 'wijmo/wijmo.angular2.input';
//import { WjCoreModule } from 'wijmo/wijmo.angular2.core';


@Component({
  selector: 'app-m2v2',
  templateUrl: './m2v2.component.html',
  styleUrls: ['./m2v2.component.css']
})
export class M2v2Component  implements OnInit{

  private GetList: GetList;
  cvPaging: wjCore.CollectionView = new wjCore.CollectionView();
  pageNews:number[] = [];
  @ViewChild('m2v2open') public m2v2open:M2v2openComponent;
  @ViewChild('flexgrid1') public flexgrid1:wjGrid.FlexGrid;

  constructor(@Inject(GetList) getList: GetList,@Inject('title') private titleService) {
    this.GetList = getList;
    this.bindpage(1);
    this.titleService.setTitle("基础数据类别");
  }

  bindpage(event:number):void {
    let pageindex:number = event;
    if(pageindex == 0){ pageindex = this.pageNews[2];}
    this.GetList.GetListPageBy_M2V2(pageindex).then(backobj =>{
      this.cvPaging.sourceCollection = backobj.List;
      this.pageNews = backobj.pageNews;
    });
  }

  ngOnInit() {
    this.flexgrid1.selectionMode = wjGrid.SelectionMode.Row;
    Auxiliary.prototype.ControlHeight();
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
                    if(flex.getCellData(i, c + 5) === 1){
                      flex.rows[i].isReadOnly = true;
                    }
                }

                cell.innerHTML = '<input type="checkbox"> ';
                let cb = cell.firstChild;
                cb.checked = cnt > 0;
                cb.indeterminate = cnt > 0 && cnt < flex.rows.length;

                cb.addEventListener('click', function (e) {
                    flex.beginUpdate();
                    for (let i = 0; i < flex.rows.length; i++) {
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
          //case 'button':
          {
            cell.style.textAlign = 'center';
          }
          break;
          /*
          case 'button':
          {
            let cb = cell.firstChild;
            cb.addEventListener('click', function (e) {
                console.log(e);
                //this.edit();
            });
          }
          break;
          */
        }
      }
  }

  //================================================

  addnew():void{
    this.m2v2open.showChildModal(null);
  }

  public edit():void{
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
        this.m2v2open.showChildModal(flex[0].dataItem);
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
