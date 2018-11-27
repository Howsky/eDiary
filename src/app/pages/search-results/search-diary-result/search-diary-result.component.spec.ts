import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiaryResultComponent } from './search-diary-result.component';

describe('SearchDiaryResultComponent', () => {
  let component: SearchDiaryResultComponent;
  let fixture: ComponentFixture<SearchDiaryResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDiaryResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiaryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
