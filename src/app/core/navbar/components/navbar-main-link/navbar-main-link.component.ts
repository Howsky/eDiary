import { NavLink } from './../../../../shared/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ediary-navbar-main-link',
  templateUrl: './navbar-main-link.component.html',
  styleUrls: ['./navbar-main-link.component.scss']
})
export class NavbarMainLinkComponent implements OnInit {
  @Input() navLink: NavLink;
  icon;

  constructor() {}

  ngOnInit() {
    this.icon = `assets/icons/${this.navLink.icon}`;
  }
}
