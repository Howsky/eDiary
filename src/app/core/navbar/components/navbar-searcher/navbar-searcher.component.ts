import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ediary-navbar-searcher',
  templateUrl: './navbar-searcher.component.html',
  styleUrls: ['./navbar-searcher.component.scss']
})
export class NavbarSearcherComponent implements OnInit {

  search: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.search = new FormGroup({
      'phrase': new FormControl()
    });
  }

  startSearching() {
    this.router.navigate(['/search-results']);
  }

}
