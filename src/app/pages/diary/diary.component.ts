import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Diary, Entry } from '../../shared/models';
import { DiaryService } from '../../core/services/diary.service';

@Component({
  selector: 'ediary-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  $diary: Observable<Diary>;
  $entriesInDiary: Observable<Entry[]>;

  constructor(
    private diaryService: DiaryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const uid = params['uid'];
      const did = params['did'];
      this.$diary = this.diaryService.getDiary(uid, did);
      this.$entriesInDiary = this.diaryService.getEntriesOfDiary(uid, did);
    });

  }

}
