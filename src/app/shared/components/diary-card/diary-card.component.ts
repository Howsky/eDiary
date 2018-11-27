import { Component, OnInit, Input } from '@angular/core';
import { Diary } from '../../../shared/models/diary.model';

@Component({
  selector: 'ediary-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  @Input() diary: Diary;
  @Input() entriesNum;

  startDate;
  img = 'linear-gradient(white, white)';
  latestEntryDate;

  constructor(
  ) {}

  ngOnInit() {
    this.img = `url(${this.diary.cover})`;
    this.startDate = new Date(this.diary.startDate);

    if (this.diary.latestEntryDate) {
      this.latestEntryDate = new Date(this.diary.latestEntryDate);
    } else {
      this.latestEntryDate = false;
    }
  }

}
