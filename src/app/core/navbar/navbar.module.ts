import { ClickOutsideModule } from 'ng-click-outside';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarLogoComponent } from './components/navbar-logo/navbar-logo.component';
import { NavbarMainLinkComponent } from './components/navbar-main-link/navbar-main-link.component';
import { NavbarSearcherComponent } from './components/navbar-searcher/navbar-searcher.component';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarDropdownMobileComponent } from './components/navbar-dropdown-mobile/navbar-dropdown-mobile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarLogoComponent,
    NavbarMainLinkComponent,
    NavbarSearcherComponent,
    NavbarDropdownComponent,
    NavbarDropdownMobileComponent
  ],
  exports: [NavbarComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ClickOutsideModule]
})
export class NavbarModule {}
