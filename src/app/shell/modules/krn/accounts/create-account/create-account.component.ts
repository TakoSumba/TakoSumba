import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Validators} from '../../../../../shared/validation-message';
import {AccountService} from '../account.service';
import {DialogService} from '../../../../../dialog-service';
import {ClientsService} from '../../../bpm/clients.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private router: Router, private accountService: AccountService,
              private dialogService: DialogService, private clientService: ClientsService) {
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
  onCreate() {


    if (this.formGroup.invalid) {
      return;
    }
    const accountName = this.get('accountName').value;
    const amount = this.get('amount').value;

    this.accountService.createAccount(this.clientService.client.value.clientKey,
      accountName, amount)
      .pipe(
        switchMap(() => {
          return this.clientService.refreshClient();
        })).subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/krn/accounts/']);
        this.formGroup.reset();
      },
      (error) => {
        this.dialogService.alert.next(error);
      }

    );

  }


}
