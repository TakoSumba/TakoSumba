import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Router} from '@angular/router';
import {Validators} from '../../shared/validation-message';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  errors(controlName) {
    // tslint:disable-next-line:no-debugger

    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
    // return this.get(controlName)?.errors
    //   ? Object.values(this.get(controlName).errors)
    //   : [];
  }

  get(controlName) {
    return this.formGroup.get(controlName);
  }

  onChange() {

    this.router.navigate(['/register']);
  }

  initForm() {
    this.formGroup = new FormGroup({
      userName: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      password: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    });
  }
}

