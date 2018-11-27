import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ediary-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {

  isVisible = false;
  @Input() list: Array < string | number > ;
  @Input() selected = null;
  @Output() sexSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectItem(item) {
    this.selected = item;
    this.isVisible = !this.isVisible;
    this.sexSelected.next(item);
  }

}
