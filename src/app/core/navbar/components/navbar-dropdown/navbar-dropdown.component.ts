import { AuthService } from './../../../auth/auth.service';
import { User } from './../../../../shared/models';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ediary-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent implements OnInit {
  @Input() user: User;

  userNavMenuVis: boolean;

  av = 'assets/img/noav.jpg';

  constructor(private authService: AuthService,
     private router: Router) {}

  ngOnInit() {
  }

  onNavigate(path) {
    this.userNavMenuVis = false;
    this.router.navigate(path);
  }

  logout() {
    this.userNavMenuVis = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
