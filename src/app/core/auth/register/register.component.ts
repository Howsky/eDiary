import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

function equalValidator({value}: FormGroup): {[key: string]: any} {

  const [first, second, pass, repass] = Object.values(value || {});

  const valid = pass === repass;

  return valid ? null : {equal: true};

}


@Component({
  selector: 'ediary-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;

  userExists: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.regForm = new FormGroup({
      'nickname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email,
      ]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'rePass': new FormControl(null, [Validators.required]),
    }, [equalValidator]);

    this.authService.userExists.subscribe(
      res => {
        this.userExists = res;
      }
    );
  }

  onSubmit() {

    const nickname = this.regForm.value.nickname;
    const email = this.regForm.value.email;
    const pass = this.regForm.value.password;
    const rePass = this.regForm.value.rePass;

    if (pass === rePass) {
      const prof = {
        nickname: nickname,
        title: 'The Untitled',
        // tslint:disable-next-line:max-line-length
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi reiciendis esse assumenda magni enim pariatur fuga, architecto atque, voluptas adipisci cum quo illum inventore quam dolore necessitatibus totam consectetur!`,
        location: 'Unknown location',
        age: 25,
        sex: 'Male',
        regDate: new Date().getTime()
      };
      this.authService.register(email, pass, prof);
    } else {
      console.log('passwords are different');
    }

  }

  gotoLogin() {
    this.authService.userExists.next(false);
    this.router.navigate(['/login']);
  }

}
