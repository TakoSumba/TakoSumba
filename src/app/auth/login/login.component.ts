import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Router} from '@angular/router';
import {Validators} from '../../shared/validation-message';
import {AuthService} from '../../shared/auth/auth.service';
import {Subscription} from 'rxjs';
import {PlaceholderDirective} from '../../shared/placeholder.directive';
import {AlertComponent} from '../../shared/alert/alert.component';
import {DialogService} from '../../dialog-service';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;


  constructor(private router: Router,
              private authService: AuthService,
              private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {

  }


  errors(controlName) {
    // tslint:disable-next-line:no-debugger

    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
    // return this.get(controlName)?.errors
    //   ? Object.values(this.get(controlName).errors)
    //   : [];
  }

  onLogin() {
    if (this.formGroup.invalid) {
      return;
    }
    const username = this.get('userName').value;
    const password = this.get('password').value;
    this.authService.login(username, password).subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/bpm/bpm000']);
        this.formGroup.reset();
      },
      (error) => {

        this.dialogService.alert.next(error);

      }
    );
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

