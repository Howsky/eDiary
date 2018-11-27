import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ediary-search-entry-result',
  templateUrl: './search-entry-result.component.html',
  styleUrls: ['./search-entry-result.component.scss']
})
export class SearchEntryResultComponent implements OnInit {

  img = 'url(assets/img/diaryCard1.jpg)';

  constructor() {}

  ngOnInit() {}

}
