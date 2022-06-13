import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Validators} from '../../../../../shared/validation-message';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
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


  initForm() {
    this.formGroup = new FormGroup({
      accountName: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      amount: new FormControl(undefined, [
        Validators.required,
        Validators.min(0)
      ]),
    });
  }

}
