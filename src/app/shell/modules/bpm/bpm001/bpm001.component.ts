import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '../../../../shared/validation-message';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {
  formGroup: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  onClick(){
      this.router.navigate(['/krn/krnicp'], {relativeTo: this.route});
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
        Validators.maxLength(30), ]),
      lastName: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      plusPoints: new FormControl(undefined, [
        Validators.required, Validators.min(0)

      ]),
  });

}}
