import { User } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../../core/services/user-profile.service';

@Component({
  selector: 'ediary-my-profile-edit',
  templateUrl: './my-profile-edit.component.html',
  styleUrls: ['./my-profile-edit.component.scss']
})
export class MyProfileEditComponent implements OnInit {

  sexList = [
    'X',
    'Male',
    'Female'
  ];

  selectedSex;
  avatar = null;

  profileEditForm: FormGroup;

  constructor(
    private router: Router,
    private userProfileService: UserProfileService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.profileEditForm = new FormGroup({
      'nickname': new FormControl(null),
      'email': new FormControl(null),
      'title': new FormControl(null, [Validators.required]),
      'location': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'sex': new FormControl(null, [Validators.required]),
      'desc': new FormControl(null, [Validators.required])
    });
    this.selectedSex = this.route.snapshot.data.info.user.sex;
  }

  async onProfileUpdate() {
    if (this.profileEditForm.value.title) {
      const title = this.profileEditForm.value.title;
      await this.userProfileService.updateTitle(title);
    }

    if (this.profileEditForm.value.location) {
      const location = this.profileEditForm.value.location;
      await this.userProfileService.updateLocation(location);
    }

    if (this.profileEditForm.value.age) {
      const age = this.profileEditForm.value.age;
      await this.userProfileService.updateAge(age);
    }

    if (this.selectedSex !== this.route.snapshot.data.info.user.sex) {
      await this.userProfileService.updateSex(this.selectedSex);
    }

    if (this.avatar !== null) {
      await this.userProfileService.updateAv(this.avatar);
    }

    if (this.profileEditForm.value.desc) {
      const desc = this.profileEditForm.value.desc;
      await this.userProfileService.updateDescription(desc);
    }

    this.router.navigate(['/my-profile']);

  }

  onSelect(item) {
    this.selectedSex = item;
  }

  onFileSelected(file) {
    this.avatar = file;
  }

}
