import { NavLink } from './shared/models/nav-link.model';
import { AuthService } from './core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './shared/models';

@Component({
  selector: 'ediary-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {


  }
}
