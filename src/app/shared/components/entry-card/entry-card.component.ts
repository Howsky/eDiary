import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../../shared/models/entry.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ediary-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss']
})
export class EntryCardComponent implements OnInit {

  img = 'linear-gradient(white, white)';
  bright = false;

  @Input() entry: Entry;
  @Input() diaryTitle;
  entryPostDate;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.entryPostDate = new Date(this.entry.postDate);
    this.img = `url(${this.entry.mainPhoto})`;
  }

  switchIn() {
    this.bright = true;
  }

  switchOut() {
    this.bright = false;
  }

  openEntry(entry: Entry) {
    const uid = this.entry.authorKey;
    const eKey = this.entry.key;
    this.router.navigate([`entry/${uid}/${eKey}`]);
  }


}
