import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Validators} from '../../shared/validation-message';
import {AuthService} from '../../shared/auth/auth.service';
import {DialogService} from '../../dialog-service';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  errors(controlName) {
    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
  }

  onRegister() {
    if (this.formGroup.invalid) {
      return;
    }
    const name = this.get('name').value;
    const username = this.get('userName').value;
    const password = this.get('password').value;
    this.authService.register(name, username, password).subscribe(
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


  checkPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      return true;
    } else {
      return false;
    }

  }


  initForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),]),
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
        Validators.maxLength(30),
        Validators.checkPassword(() => this.formGroup?.get('password')?.value)
      ]),
    });
  }
}

