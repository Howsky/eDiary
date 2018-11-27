import { AuthService } from './../../../core/auth/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { User, NavLink } from '../../models';

import * as config from '../../../config/nav-links.config';

@Component({
  selector: 'ediary-pool-layout',
  styleUrls: ['./pool-layout.container.scss'],
  templateUrl: 'pool-layout.container.html'
})
// tslint:disable-next-line:component-class-suffix
export class PoolLayoutContainer implements OnInit {
  navlinks: NavLink[];
  searchlink: NavLink;
  $user: Observable<User>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.navlinks = config.getMainNavLinks();
    this.searchlink = config.getSearchNavLink()[0];
    this.$user = this.authService.getCurrentUser();
  }
}
