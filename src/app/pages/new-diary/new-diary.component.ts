import { User } from './../../shared/models/user.model';
import { DiaryService } from './../../core/services/diary.service';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Diary } from '../../shared/models/diary.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TagsValidator } from '../../shared/validators';

@Component({
  selector: 'ediary-new-diary',
  templateUrl: './new-diary.component.html',
  styleUrls: ['./new-diary.component.scss']
})
export class NewDiaryComponent implements OnInit {
  entryVisibility = true;
  diaryForm: FormGroup;

  cover = null;

  sizeTooBig: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private authService: AuthService,
    private diaryService: DiaryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.diaryForm = new FormGroup({
      author: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      desc: new FormControl(null, [Validators.required]),
      tags: new FormControl(null, [Validators.required, TagsValidator])
    });
  }

  onSubmit() {
    this.authService.getCurrentUser().subscribe((user: User) => {
      const author = user.nickname;
      const title = this.diaryForm.value.title;
      const isPrivate = this.entryVisibility;
      const desc = this.diaryForm.value.desc;
      const re = /#[a-zA-Z]{1}[\w]+/g;
      const tags = this.diaryForm.value.tags.match(re).map((tag: string) => {
        return tag.toLowerCase();
      });

      const cover = null;
      this.diaryForm.reset();
      const newDiary = new Diary(author, title, isPrivate, desc, tags, cover);
      this.diaryService.addDiary(newDiary, this.cover);
      this.router.navigate([`/my-diaries`]);
    });
  }

  onReset() {
    this.diaryForm.reset();
  }

  onFileSelected(file) {
    this.cover = file;
  }
}
