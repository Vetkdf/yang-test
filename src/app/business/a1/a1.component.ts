import { Component, OnInit,Inject } from '@angular/core';
import { Auxiliary } from '../../common/constants/auxiliary';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  constructor(@Inject('title') private titleService) { }

  ngOnInit() {
    this.titleService.setTitle('欢迎页面');
    Auxiliary.prototype.ControlHeight();
  }

}
