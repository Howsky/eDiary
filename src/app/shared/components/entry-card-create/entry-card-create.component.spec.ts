import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCardCreateComponent } from './entry-card-create.component';

describe('EntryCardCreateComponent', () => {
  let component: EntryCardCreateComponent;
  let fixture: ComponentFixture<EntryCardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
