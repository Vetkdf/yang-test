import { Component, OnInit } from '@angular/core';
import ConstantsList from '../../../common/constants/config';

declare var $:any;
@Component({
  selector: 'app-m3v6',
  templateUrl: './m3v6.component.html',
  styleUrls: ['./m3v6.component.css']
})
export class M3v6Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#content").css("min-height", $(window).height() - ConstantsList.pageHeight);//min-height
  }

}
