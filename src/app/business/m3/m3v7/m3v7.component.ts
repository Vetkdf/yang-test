import { Component, OnInit } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m3v7',
  templateUrl: './m3v7.component.html',
  styleUrls: ['./m3v7.component.css']
})
export class M3v7Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

}
