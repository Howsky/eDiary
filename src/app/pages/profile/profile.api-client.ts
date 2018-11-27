import { FirebaseService } from './../../core/services/firebase.service';

import { Injectable } from '@angular/core';

@Injectable()
export class ProfileApiClient {
  constructor(private firebaseService: FirebaseService) {}
}
