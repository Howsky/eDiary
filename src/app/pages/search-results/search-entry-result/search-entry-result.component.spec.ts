import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntryResultComponent } from './search-entry-result.component';

describe('SearchEntryResultComponent', () => {
  let component: SearchEntryResultComponent;
  let fixture: ComponentFixture<SearchEntryResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEntryResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEntryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
