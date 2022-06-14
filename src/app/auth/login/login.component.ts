import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Router} from '@angular/router';
import {Validators} from '../../shared/validation-message';
import {AuthService} from '../../shared/auth/auth.service';
import {Subscription} from 'rxjs';
import {PlaceholderDirective} from '../../shared/placeholder.directive';
import {AlertComponent} from '../../shared/alert/alert.component';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  closeSub: Subscription;
  @ViewChild(PlaceholderDirective) alertPlaceholder: PlaceholderDirective;
  constructor(private router: Router, private authService: AuthService,
              private cfr: ComponentFactoryResolver) {
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
  onLogin() {
    if (this.formGroup.invalid) {
      return;
    }
    const username = this.get('userName').value;
    const password = this.get('password').value;
    this.authService.login(username, password).subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/']);
        this.formGroup.reset();
      },
      (error) => {
        this.showError(error);
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

  private showError(error: string) {
    const alertComponentFactory = this.cfr.resolveComponentFactory(
      AlertComponent
    );
    this.alertPlaceholder.viewContainerRef.clear();
    const alertRef = this.alertPlaceholder.viewContainerRef.createComponent(
      alertComponentFactory
    );
    alertRef.instance.error = error;
    this.closeSub = alertRef.instance.closeClick.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertPlaceholder.viewContainerRef.clear();
    });
  }
}

