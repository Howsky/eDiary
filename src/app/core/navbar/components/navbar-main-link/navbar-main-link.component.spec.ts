import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMainLinkComponent } from './navbar-main-link.component';

describe('NavbarMainLinkComponent', () => {
  let component: NavbarMainLinkComponent;
  let fixture: ComponentFixture<NavbarMainLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMainLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMainLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
