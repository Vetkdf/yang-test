import { Component, OnInit } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m3v3',
  templateUrl: './m3v3.component.html',
  styleUrls: ['./m3v3.component.css']
})
export class M3v3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight("#content");
  }

}
