import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ediary-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  avatar = 'assets/img/noav.jpg';

  userNotFound: boolean;
  invalidPassForUser: boolean;

  constructor(
    private authService: AuthService,
     private router: Router,
    ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email,
      ]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

    this.authService.userNotFound.subscribe(
      res => {
        this.userNotFound = res;
      }
    );

    this.authService.loginWrongPassword.subscribe(
      res => {
        this.invalidPassForUser = res;
      }
    );

  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const pass = this.loginForm.value.password;
    this.authService.login(email, pass);
  }

  isFieldValid(field: string) {
    return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
  }

  gotoRegistration() {
    this.authService.userNotFound.next(false);
    this.authService.loginWrongPassword.next(false);
    this.router.navigate(['/register']);
  }


}
