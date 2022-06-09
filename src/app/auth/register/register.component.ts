import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Validators} from '../validation-message';
@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  errors(controlName) {
    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
  }

  get(controlName) {
    return this.formGroup.get(controlName);
  }


  checkPassword(password, confirmPassword){
    if (password !== confirmPassword){
      return true;
    }else return false

  }


  initForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30), ]),
      userName: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.maxLength(30),
      ]),
      password: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      confirmPassword: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/),
        Validators.minLength(2),
        Validators.maxLength(30), ])
    });
  }
}

