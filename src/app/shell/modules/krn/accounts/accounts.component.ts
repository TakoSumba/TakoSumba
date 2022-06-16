import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';
import {LoaderService} from '../../../../shared/loader/loader.service';
import {Account} from './account.model';
import {ClientsService} from '../../bpm/clients.service';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService,
              private loader: LoaderService, private clientService: ClientsService) {
  }

  ngOnInit(): void {
    this.fetchAccounts(this.clientService.client.value.clientKey);
  }

  // onFetchAccounts() {
  //   this.fetchAccounts();
  // }

  private fetchAccounts(clientKey: number) {
    this.accountService
      .fetchAccount(
        clientKey
      )
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((accounts) => (this.accounts = accounts));
  }
}
