import { Component, OnInit } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m3v1',
  templateUrl: './m3v1.component.html',
  styleUrls: ['./m3v1.component.css']
})
export class M3v1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

}
