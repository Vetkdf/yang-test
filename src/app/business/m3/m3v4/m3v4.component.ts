import { Component, OnInit } from '@angular/core';
import ConstantsList from '../../../common/constants/config';

declare var $:any;
@Component({
  selector: 'app-m3v4',
  templateUrl: './m3v4.component.html',
  styleUrls: ['./m3v4.component.css']
})
export class M3v4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#content").css("min-height", $(window).height() - ConstantsList.pageHeight);//min-height
  }

}
