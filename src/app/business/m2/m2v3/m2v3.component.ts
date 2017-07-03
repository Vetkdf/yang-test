import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params }from'@angular/router';
import { GetList } from '../../services/getlist';
import * as wjCore from 'wijmo/wijmo';
import * as wjInput from 'wijmo/wijmo.input';
import * as wjGrid from 'wijmo/wijmo.grid';
import { PageBackContent_M2V2 } from '../../../module/getlist';

@Component({
  selector: 'app-m2v3',
  templateUrl: './m2v3.component.html',
  styleUrls: ['./m2v3.component.css']
})
export class M2v3Component implements OnInit {

  comIdList:PageBackContent_M2V2[];
  comId:string = '';

  private GetList: GetList;
  cvPaging: wjCore.CollectionView = new wjCore.CollectionView();
  pageNews:number[] = [];

  constructor(@Inject(GetList) getList: GetList,private route: ActivatedRoute) {
    this.GetList = getList;
  }

  ngOnInit() {
    this.GetList.GetListPageBy_M2V3_List().
      then(backobj =>{
          this.comIdList = backobj;
          //this.route.params.forEach((params: Params) => {
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
    this.GetList.GetListPageBy_M2V3(event,this.comId).then(backobj =>{
      this.cvPaging.sourceCollection = backobj.List;
      this.pageNews = backobj.pageNews;
    });
  }

  itemFormatter(panel, r, c, cell) { // r 是行， c 是列  都是从0 开始
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
                    if(flex.getCellData(i, c + 7) === '禁用'){
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
          case 'indexcode':
          case 'isdel':
          case 'isdelandedit':
          case 'code':
          case 'orderid':
          case 'button':
          {
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
            cell.style.textAlign = 'center';
          }
          break;
        }
      }
  }

  selectCheck() {
    alert('先获取表格对象在说');
    //let flexgrid1 = this.flexgrid1;

  }

}
