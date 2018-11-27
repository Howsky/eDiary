import { User } from './../../shared/models/user.model';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Diary } from '../../shared/models';
import { DiaryService } from '../../core/services/diary.service';

@Component({
  selector: 'ediary-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user: User;
  diaries: Diary[];

  diariesNum = 0;
  entriesNum = 0;

  av = 'assets/img/noav.jpg';

  entriesInDiary = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private diaryService: DiaryService
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data.info.user;
    this.diaries = this.route.snapshot.data.info.diaries;
    this.entriesNum = this.route.snapshot.data.info.numOfEntries;
    this.diariesNum = this.diaries.length;

    const uid = this.authService.getUid();

    for (const diary of this.diaries) {
      this.diaryService
        .getNumOfEntriesInDiary(uid, diary.key)
        .subscribe(num => this.entriesInDiary.push(num));
      this.entriesInDiary = [];
    }
  }

  openDiary(diaryRef) {
    const uid = this.authService.getUid();
    this.router.navigate([`/diary/${uid}/${diaryRef}`]);
  }

  gotoEditProfile() {
    this.router.navigate(['/my-profile-edit']);
  }
}
