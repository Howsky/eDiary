import { AuthService } from '../../core/auth/auth.service';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, Observer } from 'rxjs';
import { UserProfileService } from '../../core/services/user-profile.service';
import { User } from '../../shared/models';

@Injectable()
export class MyProfileEditResolver implements Resolve<any> {

  constructor(private authService: AuthService, private userProfileService: UserProfileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return Observable.create((observer: Observer<any>) => {
      this.userProfileService.getMyProfile().subscribe((user: User) => {
        observer.next({ user: user });
        observer.complete();
      });
    });
  }


}