import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryCardCreateComponent } from './diary-card-create.component';

describe('DiaryCardCreateComponent', () => {
  let component: DiaryCardCreateComponent;
  let fixture: ComponentFixture<DiaryCardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryCardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
