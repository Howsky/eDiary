import { AuthService } from './../auth/auth.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  setProfile(prof: object) {
    const uid = this.authService.getUid();
    this.firebaseService.setObject(`profiles/${uid}`, prof);
  }

  getMyProfile() {
    const uid = this.authService.getUid();
    return this.firebaseService.getObject(`profiles/${uid}`);
  }

  async updateAv(av: File) {
    const uid = this.authService.getUid();
    const filePath = `profiles/${uid}/avatar`;
    await this.firebaseService.uploadFile(filePath, av);
    const avatar = await this.firebaseService.getFileURL(filePath);
    return this.firebaseService.updateObject(`profiles/${uid}`, { avatar });
  }

  updateTitle(newTitle: string) {
    console.log(newTitle);
    this.updateProperty({ title: newTitle });
  }

  updateLocation(newLocation: string) {
    this.updateProperty({ location: newLocation });
  }

  updateAge(newAge: number) {
    this.updateProperty({ age: newAge });
  }

  updateSex(newSex: string) {
    this.updateProperty({ sex: newSex });
  }

  updateDescription(newDesc: string) {
    this.updateProperty({ desc: newDesc });
  }

  private updateProperty(newProperty) {
    const uid = this.authService.getUid();
    const path = `profiles/${uid}`;
    this.firebaseService.updateObject(path, newProperty);
  }

}
