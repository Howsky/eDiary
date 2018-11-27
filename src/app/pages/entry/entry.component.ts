import { Entry } from './../../shared/models/entry.model';
import { AuthService } from './../../core/auth/auth.service';
import { DiaryService } from './../../core/services/diary.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Diary } from '../../shared/models';

@Component({
  selector: 'ediary-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  entry: Entry;
  diary: Diary;

  constructor(
    private diaryService: DiaryService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entry = this.route.snapshot.data.info.entry;
    this.diary = this.route.snapshot.data.info.diary;
  }
}
