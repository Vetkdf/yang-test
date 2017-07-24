import { Component, OnInit } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m2v4',
  templateUrl: './m2v4.component.html',
  styleUrls: ['./m2v4.component.css']
})
export class M2v4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

}
