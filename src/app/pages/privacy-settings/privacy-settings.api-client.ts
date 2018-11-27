import { FirebaseService } from './../../core/services/firebase.service';

import { Injectable } from '@angular/core';

@Injectable()
export class PrivacySettingsApiClient {
  constructor(private firebaseService: FirebaseService) {}
}
