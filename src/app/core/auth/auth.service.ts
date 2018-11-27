import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  loginWrongPassword: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userNotFound: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userExists: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private readonly router: Router,
    private readonly firebaseService: FirebaseService
  ) {}

  async login(email: string, password: string) {
    try {
      await this.firebaseService.login(email, password);
      this.token = await this.firebaseService.getIdToken();
      this.router.navigate(['/newsfeed']);
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/user-not-found') {
        this.userNotFound.next(true);
        this.loginWrongPassword.next(false);
      }
      if (error.code === 'auth/wrong-password') {
        this.loginWrongPassword.next(true);
        this.userNotFound.next(false);
      }
    }
  }

  async register(email: string, password: string, profileData: {}) {
    try {
      const uid = await this.firebaseService.createUser(email, password);
      await this.firebaseService.setObject(`profiles/${uid}`, profileData);
      await this.login(email, password);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        this.userExists.next(true);
      }
    }
  }

  async logout() {
    await this.firebaseService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.token != null;
  }

  getUid() {
    return this.firebaseService.getUid();
  }

  getCurrentUser() {
    const uid = this.getUid();
    return this.firebaseService.getUser(uid);
  }
}
