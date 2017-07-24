import { Component, OnInit } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m3v5',
  templateUrl: './m3v5.component.html',
  styleUrls: ['./m3v5.component.css']
})
export class M3v5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

}
