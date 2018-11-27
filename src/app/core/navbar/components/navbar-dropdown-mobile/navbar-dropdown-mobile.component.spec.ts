import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDropdownMobileComponent } from './navbar-dropdown-mobile.component';

describe('NavbarDropdownMobileComponent', () => {
  let component: NavbarDropdownMobileComponent;
  let fixture: ComponentFixture<NavbarDropdownMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDropdownMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDropdownMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
