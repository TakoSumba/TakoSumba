import {HttpClient, HttpParams} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoaderService} from '../../../../shared/loader/loader.service';
import {Account} from './account.model';
import {Client} from '../../bpm/client.model';


@Injectable({
  providedIn: 'root'
})

export class AccountService {


  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  fetchAccount(clientKey: number) {
    const params = new HttpParams().set('clientKey', clientKey.toString());

    return this.http.get<Account[]>(`accounts`, {params});
  }


  fetchAllAccounts() {
    return this.http.get<Account[]>('accounts');
  }

  createAccount(clientKey, accountName, amount) {
    return this.http
      .put<Client>('accounts', {
        clientKey,
        accountName,
        amount,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
      );
  }

  doTransfer(senderAccountKey, receiverAccountKey, amount) {
    return this.http
      .post<void>('transfer', {
        senderAccountKey,
        receiverAccountKey,
        amount
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error))
      );
  }

  deleteAccount(accountKey) {
    return this.http.delete('accounts', {params: new HttpParams().set('accountKey', accountKey)});
  }
}
