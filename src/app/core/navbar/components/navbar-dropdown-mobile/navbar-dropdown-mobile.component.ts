import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'ediary-navbar-dropdown-mobile',
  templateUrl: './navbar-dropdown-mobile.component.html',
  styleUrls: ['./navbar-dropdown-mobile.component.scss']
})
export class NavbarDropdownMobileComponent implements OnInit {

  @Input() user: User;

  mobileNavMenuVis = false;

  av = 'assets/img/noav.jpg';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onClickedOutside(e: Event) {
    this.mobileNavMenuVis = false;
  }

  onBurgerClick() {
    if (this.mobileNavMenuVis === false) {
      this.mobileNavMenuVis = true;
    } else if (this.mobileNavMenuVis === true) {
      this.mobileNavMenuVis = false;
    }
  }

  onNavigate(path) {
    this.mobileNavMenuVis = false;
    this.router.navigate(path);
  }

  logout() {
    this.mobileNavMenuVis = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
