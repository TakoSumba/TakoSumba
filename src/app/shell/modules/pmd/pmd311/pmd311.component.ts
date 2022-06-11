import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Validators} from '../../../../auth/validation-message';

@Component({
  selector: 'bg-pmd311',
  templateUrl: './pmd311.component.html',
  styleUrls: ['./pmd311.component.scss']
})
export class Pmd311Component implements OnInit {
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
      senderAccountKey: new FormControl('',
        Validators.required,
      ),
      receiverAccountKey: new FormControl('',
        Validators.required,
      ),
      amount: new FormControl(undefined, Validators.required)
    });
  }

}
