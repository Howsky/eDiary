import { DiaryService } from './../../core/services/diary.service';
import { AuthService } from './../../core/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Diary } from '../../shared/models/diary.model';
import { Entry } from '../../shared/models/entry.model';
import { Router } from '@angular/router';
import { TagsValidator } from '../../shared/validators';
import { User } from '../../shared/models';

@Component({
  selector: 'ediary-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  diaries;
  selectedDiary: Diary;
  selectedDiaryKey: string;
  x = 0;

  entryForm: FormGroup;
  mainPhoto = null;
  sizeTooBig: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user;

  constructor(
    private authService: AuthService,
    private diaryService: DiaryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.entryForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      tags: new FormControl(null, [Validators.required, TagsValidator])
    });

    const uid = this.authService.getUid();
    this.diaryService.getListOfDiaries(uid).subscribe(d => {
      this.diaries = d;
      this.selectedDiary = this.diaries[0];
      this.selectedDiaryKey = this.diaries[0].key;
    });
    this.authService.getCurrentUser().subscribe((user: User) => this.user = user);
  }

  onDiaryShift() {
    if (this.x >= this.diaries.length - 1) {
      this.x = 0;
    } else {
      this.x++;
    }

    this.selectedDiary = this.diaries[this.x];
    this.selectedDiaryKey = this.diaries[this.x].key;
  }

  onSubmit() {
    const dkey = this.selectedDiaryKey;
    const author = this.user.nickname;
    const title = this.entryForm.value.title;
    const content = this.entryForm.value.content;
    const re = /#[a-zA-Z]{1}[\w]+/g;
    const tags = this.entryForm.value.tags.match(re).map((tag: string) => {
      return tag.toLowerCase();
    });
    this.entryForm.reset();
    const newEntry = new Entry(title, content, author, tags);
    this.diaryService.addEntry(newEntry, dkey, this.mainPhoto);
    const uid = this.authService.getUid();
    this.router.navigate([`/diary/${uid}/${dkey}`]);
  }

  onReset() {
    this.entryForm.reset();
  }

  onFileSelected(file) {
    this.mainPhoto = file;
  }
}
