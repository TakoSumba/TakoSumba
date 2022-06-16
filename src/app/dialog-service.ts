import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  alert = new Subject<string>();

  constructor() {
  }
}
