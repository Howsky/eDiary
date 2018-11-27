import { FirebaseService } from '../../core/services/firebase.service';

import { Injectable } from '@angular/core';
import { Diary } from '../../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class MyDiariesApiClient {
  constructor(private firebaseService: FirebaseService) {}

  getDiaries(uid): Observable<Diary[]> {
    return this.firebaseService.getList(`diaries/${uid}`).valueChanges() as Observable<Diary[]>;
  }

}
