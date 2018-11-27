import { Entry } from './../../shared/models/entry.model';
import { FirebaseService } from './firebase.service';
import { AuthService } from './../auth/auth.service';
import { Diary } from './../../shared/models/diary.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  diariesList: Diary[];
  diariesNumLimit = 3;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  async addDiary(newDiary: Diary, cover?: File) {
    const uid = this.authService.getUid();
    const dkey = await this.firebaseService.createPushId();

    if (cover !== null && typeof cover !== 'undefined') {
      const path = `diaries/${uid}/${dkey}/diaryCover`;
      const task = await this.firebaseService.uploadFile(path, cover);
      const imgUrl = await this.firebaseService.getFileURL(path);
      const diary = { ...newDiary, authorKey: uid, key: dkey, cover: imgUrl };
      await this.firebaseService.setObject(`diaries/${uid}/${dkey}`, diary);
    } else {
      const diary = { ...newDiary, authorKey: uid, key: dkey, cover: null };
      await this.firebaseService.setObject(`diaries/${uid}/${dkey}`, diary);
    }
  }

  async addEntry(newEntry: Entry, dKey: string, mainPhoto?: File) {
    const uid = this.authService.getUid();
    const ekey = await this.firebaseService.createPushId();
    const pathEPD = `entriesPerDiary/${uid}/${dKey}/${ekey}`;
    const pathE = `entries/${uid}/${ekey}`;
    if (mainPhoto !== null && typeof mainPhoto !== 'undefined') {
      const filePath = `entries/${uid}/${ekey}/mainPhoto`;
      await this.firebaseService.uploadFile(filePath, mainPhoto);
      const mainPhotoUrl = await this.firebaseService.getFileURL(filePath);
      const entry = {
        ...newEntry,
        key: ekey,
        parentDiaryKey: dKey,
        authorKey: uid,
        mainPhoto: mainPhotoUrl
      };
      const diaryEdit = { latestEntryDate: new Date().getTime() };
      await this.firebaseService.setObject(pathE, entry);
      await this.firebaseService.setObject(pathEPD, true);
      await this.firebaseService.updateObject(
        `diaries/${uid}/${dKey}`,
        diaryEdit
      );
    } else {
      const entry = {
        ...newEntry,
        key: ekey,
        parentDiaryKey: dKey,
        authorKey: uid
      };
      const diaryEdit = { latestEntryDate: new Date().getTime() };
      await this.firebaseService.setObject(pathE, entry);
      await this.firebaseService.setObject(pathEPD, true);
      await this.firebaseService.updateObject(
        `diaries/${uid}/${dKey}`,
        diaryEdit
      );
    }
  }

  getListOfDiaries(uid) {
    return this.firebaseService.getList(`diaries/${uid}`).valueChanges();
  }

  getEntry(uid, eid) {
    return this.firebaseService.getObject(
      `entries/${uid}/${eid}`
    ) as Observable<Entry>;
  }

  getListOfEntries(uid) {
    return this.firebaseService.getList(`entries/${uid}`).valueChanges();
  }

  getEntriesOfDiary(uid, did) {
    const list = this.firebaseService
      .getList(`entries/${uid}`, ref =>
        ref.orderByChild('parentDiaryKey').equalTo(did)
      )
      .valueChanges();
    return list as Observable<Entry[]>;
  }

  getNumOfEntriesInDiary(uid, did) {
    const list = this.firebaseService
      .getList(`entriesPerDiary/${uid}/${did}`)
      .valueChanges();
    return list.pipe(switchMap((entry: []) => of(entry.length))) as Observable<
      Number
    >;
  }

  getDiary(uid, dkey) {
    return this.firebaseService.getObject(
      `diaries/${uid}/${dkey}`
    ) as Observable<Diary>;
  }
}
