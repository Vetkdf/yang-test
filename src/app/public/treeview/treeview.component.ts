import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {

  @Input() treemodule: string = 'M1';
  @Input() treeitem: string = 'V1';
  check:string;

  constructor() { }

  ngOnInit() {
    this.check = this.treemodule + this.treeitem;
  }

}
