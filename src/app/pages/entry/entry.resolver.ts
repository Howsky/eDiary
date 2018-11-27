import { Diary } from './../../shared/models/diary.model';
import { Entry } from './../../shared/models/entry.model';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DiaryService } from '../../core/services/diary.service';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class EntryResolver implements Resolve<any> {

  constructor(private diaryService: DiaryService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const uid = route.paramMap.get('uid');
    const eid = route.paramMap.get('eid');
    return Observable.create((observer: Observer<any>) => {
      this.diaryService.getEntry(uid, eid).subscribe((entry: Entry) => {
        const did = entry.parentDiaryKey;
        this.diaryService.getDiary(uid, did).subscribe((diary: Diary) => {
          observer.next({entry, diary});
          observer.complete();
        });
      });
    });
  }


}