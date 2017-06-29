import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  constructor() { }

  @Input() pageNews: number[] = [0,0,0,0,0];
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  moveToFirstPage() {
    this.change.emit(1);
  }

  moveToPreviousPage() {
    this.change.emit(this.pageNews[2] - 1);
  }

  moveToNextPage(){
    this.change.emit(this.pageNews[2] + 1);
  }

  moveToLastPage() {
    this.change.emit(this.pageNews[1]);
  }

}
