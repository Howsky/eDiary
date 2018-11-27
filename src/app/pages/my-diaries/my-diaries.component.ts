import { DiaryService } from './../../core/services/diary.service';
import { MyDiariesApiClient } from './my-diaries.api-client';
import { AuthService } from './../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Diary } from '../../shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ediary-my-diaries',
  templateUrl: './my-diaries.component.html',
  styleUrls: ['./my-diaries.component.scss']
})
export class MyDiariesComponent implements OnInit {
  $diaries: Observable<Diary[]>;
  entriesInDiary = [];
  numOfDiaries = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private myDiariesApiClient: MyDiariesApiClient,
    private diaryService: DiaryService,
  ) {}

  ngOnInit() {
    const uid = this.authService.getUid();
    this.$diaries = this.myDiariesApiClient.getDiaries(uid);
    this.$diaries.subscribe((diaries: Diary[]) => {
      this.numOfDiaries = diaries.length;
      this.entriesInDiary = [];
      for(let diary of diaries) {
        this.diaryService.getNumOfEntriesInDiary(uid, diary.key).subscribe(num => this.entriesInDiary.push(num));
      }
    });
  }

  openDiary(diaryRef) {
    const uid = this.authService.getUid();
    this.router.navigate([`/diary/${uid}/${diaryRef}`]);
  }

}
