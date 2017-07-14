import { Component, OnInit } from '@angular/core';
import ConstantsList from '../../../common/constants/config';

declare var $:any;
@Component({
  selector: 'app-m2v4',
  templateUrl: './m2v4.component.html',
  styleUrls: ['./m2v4.component.css']
})
export class M2v4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#content").css("min-height", $(window).height() - ConstantsList.pageHeight);
  }

}
