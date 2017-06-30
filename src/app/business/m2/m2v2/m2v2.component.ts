import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetList } from '../../services/getlist';

import * as wjCore from 'wijmo/wijmo';
import * as wjInput from 'wijmo/wijmo.input';
import * as wjGrid from 'wijmo/wijmo.grid';

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

  constructor(@Inject(GetList) getList: GetList, private router: Router) {
    this.GetList = getList;
    this.bindpage(1);
  }

  bindpage(event:number):void {
    this.GetList.GetListPageBy_M2V2(event).then(backobj =>{
      this.cvPaging.sourceCollection = backobj.List;
      this.pageNews = backobj.pageNews;
    });
  }

  ngOnInit() {
  }

  itemFormatter(panel, r, c, cell) {
      if (panel.cellType === wjGrid.CellType.ColumnHeader) {
        cell.style.textAlign = 'center';
        if (panel.columns[c].binding === 'check') {
            let flex = panel.grid;
            let col = flex.columns[c];

            if (col.dataType == wjCore.DataType.Boolean) {
                col.allowSorting = false;// 是否可排序

                var cnt = 0;
                for (let i = 0; i < flex.rows.length; i++) {
                    if (flex.getCellData(i, c) == true) cnt++;
                    if(flex.getCellData(i, c + 5) === '禁用'){
                      let v = flex.rows[i];
                      v.isReadOnly = true; //v.disabled = true;
                    }
                }

                //cell.innerHTML = '<input type="checkbox"> ' + cell.innerHTML;
                cell.innerHTML = '<input type="checkbox"> ';
                var cb = cell.firstChild;
                cb.checked = cnt > 0;
                cb.indeterminate = cnt > 0 && cnt < flex.rows.length;

                // apply checkbox value to cells
                cb.addEventListener('click', function (e) {
                    flex.beginUpdate();
                    for (let i = 0; i < flex.rows.length; i++) {
                      let v = flex.rows[i];
                      if(v.isReadOnly == false){
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
                //cell.innerHTML = '<a onclick="alert(\'主键是 ： '+cellData+'\')">编辑</a>';
                let cellData1 = panel.getCellData(r,c -1 );
                if(cellData1 === '可编辑'){
                  cell.innerHTML = '<a onclick="alert(\'主键是 ： '+cellData + '\')">编辑</a>';
                }
                else{
                  cell.innerHTML = '编辑';
                }
              break;
            }
            cell.style.textAlign = 'center';
          }
          break;
          //case 'indexname':
          //{
            /*
            let rowData = panel.rows[r].dataItem;
            cell.addEventListener('click', function (e) {

              this.router.navigate(['/business/m2/m2v3']);
              //alert(rowData.id);
            });
            cell.innerHTML = '<a>' + cell.innerHTML + '</a>';
            */
          //  cell.innerHTML = '<div><a [routerLink]="['+ "'" + '/business/m2/m2v3' + "'" + ']" routerLinkActive="active">' + cell.innerHTML + '</a></div>';
          //}
          //break;
        }
      }
  }

}
