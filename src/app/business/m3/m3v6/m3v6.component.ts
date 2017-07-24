import { Component, OnInit } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m3v6',
  templateUrl: './m3v6.component.html',
  styleUrls: ['./m3v6.component.css']
})
export class M3v6Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

}
