import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiariesComponent } from './my-diaries.component';

describe('MyDiariesComponent', () => {
  let component: MyDiariesComponent;
  let fixture: ComponentFixture<MyDiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
