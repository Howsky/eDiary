import { NavLink } from './../../shared/models/nav-link.model';
import { User } from './../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ediary-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() user: User;
  @Input() navlinks: NavLink[];
  @Input() searchlink: NavLink;

  constructor() { }

  ngOnInit() {
  }

}
