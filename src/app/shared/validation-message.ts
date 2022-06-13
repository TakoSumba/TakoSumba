import {Validators as NGValidators, AbstractControl, FormControl} from '@angular/forms';

export class Validators extends NGValidators {
  static minLength(length) {
    return (control) =>
      super.minLength(length)(control)
        ? {minLength: 'არ შეიძლება ველის სიგრძე იყოს ' + length + '-ზე ნაკლები'}
        : undefined;
  }

  static maxLength(length) {
    return (control) =>
      super.maxLength(length)(control)
        ? {maxLength: 'არ შეიძლება ველის სიგრძე იყოს ' + length + '-ზე ნაკლები'}
        : undefined;
  }

  static required(control) {
    return super.required(control)
      ? {required: 'ველი აუცილებელია'}
      : undefined;
  }

  static pattern(pattern: string | RegExp, patternDescription?: string) {
    return (control: AbstractControl) => {
      if (super.pattern(pattern)(control)) {
        return {
          minLength: `გთხოვთ დაიცვათ შაბლონი '${patternDescription || pattern.toString()}'`
        };
      }
    };
  }

  static min(min: number) {
   return (control) => super.min(min)(control) ? {required: 'გთხოვთ შეიყვანოთ მინიმუმ 0'} : undefined;
  }

  // static checkPassword(password: string) {
  //   return (control) =>
  //     control.value !== password ? {confirmPasswordMismatch: 'პაროლები არ ემთხვევა დებილო'}
  //       : undefined;
  // }
}
