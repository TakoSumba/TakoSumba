import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '../../../../shared/validation-message';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthResponseModel} from '../../../../shared/auth/auth-response.model';
import {catchError, tap} from 'rxjs/operators';
import {Subscription, throwError} from 'rxjs';
import {ClientsService} from '../clients.service';
import {DialogService} from '../../../../dialog-service';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {
  formGroup: FormGroup;
  createClientSub: Subscription;
  constructor(private router: Router, private route: ActivatedRoute,
              private clientService: ClientsService,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onCreate() {


      if (this.formGroup.invalid) {
        return;
      }
      const firstName = this.get('firstName').value;
      const lastName = this.get('lastName').value;
      const plusPoints = this.get('plusPoints').value;
      this.clientService.createClient(firstName, lastName, plusPoints).subscribe(
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

  errors(controlName) {
    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
  }

  get(controlName) {
    return this.formGroup.get(controlName);
  }

  initForm() {
    this.formGroup = new FormGroup({
      firstName: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),]),
      lastName: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      plusPoints: new FormControl(undefined, [
        Validators.required, Validators.min(0)

      ]),
    });


  }
}
