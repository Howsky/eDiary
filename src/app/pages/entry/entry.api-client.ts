import { FirebaseService } from './../../core/services/firebase.service';

import { Injectable } from '@angular/core';

@Injectable()
export class EntryApiClient {
  constructor(private firebaseService: FirebaseService) {}
}
