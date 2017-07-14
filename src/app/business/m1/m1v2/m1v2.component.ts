import { Component, OnInit,Inject } from '@angular/core';
import { DataSvc } from '../../services/DataSvc';
import * as wjCore from 'wijmo/wijmo';
import * as wjInput from 'wijmo/wijmo.input';
import * as wjGrid from 'wijmo/wijmo.grid';
import ConstantsList from '../../../common/constants/config';
'use strict';

declare var $:any;
@Component({
  selector: 'app-m1v2',
  templateUrl: './m1v2.component.html',
  styleUrls: ['./m1v2.component.css']
})
export class M1v2Component implements OnInit {

  private dataSvc: DataSvc;
  cvPaging: wjCore.CollectionView;

  constructor(@Inject(DataSvc) dataSvc: DataSvc) {
    this.dataSvc = dataSvc;
    this.cvPaging = new wjCore.CollectionView(this.dataSvc.getData(100));
    this.cvPaging.pageSize = 10;
   }

  ngOnInit() {
    $("#content").css("min-height", $(window).height() - ConstantsList.pageHeight);//min-height
  }

  itemFormatter = function (panel, r, c, cell) {
      if (panel.cellType === wjGrid.CellType.Cell && panel.columns[c].header == 'Country') {
          let rowData = panel.rows[r].dataItem;
          cell.innerHTML = '<div><a [routerLink]="[' + "'" + '/detail' + "'" + ',' + rowData.id + ']" routerLinkActive="active">' + cell.innerHTML + '</a></div>';
          console.log(cell.innerHTML);
      }
  }

}

//<wj-flex-grid [itemsSource]="data">
//</wj-flex-grid>
