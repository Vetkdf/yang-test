import { Component, OnInit,Inject } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';

@Component({
  selector: 'app-m2v4',
  templateUrl: './m2v4.component.html',
  styleUrls: ['./m2v4.component.css']
})
export class M2v4Component implements OnInit {

  constructor(@Inject('title') private titleService) {
    this.titleService.setTitle("M2V4页面");
  }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

}
