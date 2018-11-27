import { User } from './../../shared/models/user.model';
import { AuthService } from './../../core/auth/auth.service';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DiaryService } from '../../core/services/diary.service';
import { Observable, Observer } from 'rxjs';
import { Diary } from '../../shared/models';

@Injectable()
export class MyProfileResolver implements Resolve<any> {
  constructor(
    private diaryService: DiaryService,
    private authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const uid = this.authService.getUid();
    return Observable.create((observer: Observer<any>) => {
      this.diaryService.getListOfEntries(uid).subscribe(e => {
        const numOfEntries = e.length;
        this.diaryService
          .getListOfDiaries(uid)
          .subscribe((diaries: Diary[]) => {
            this.authService.getCurrentUser().subscribe((user: User) => {
              observer.next({ numOfEntries, diaries, user });
              observer.complete();
            });
          });
      });
    });
  }
}
