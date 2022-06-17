import {HttpClient, HttpParams} from '@angular/common/http';
import {Client} from './client.model';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {AuthResponseModel} from '../../../shared/auth/auth-response.model';
import {catchError, tap} from 'rxjs/operators';
import {LoaderService} from '../../../shared/loader/loader.service';


@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  client = new BehaviorSubject<Client>(this.getClient());

  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  fetchClients(filter: { firstName: string; lastName: string; clientKey: string; }) {
    const params = new HttpParams().set('firstName', filter.firstName).set('lastName', filter.lastName).set('clientKey', filter.clientKey);

    return this.http.get<Client[]>(`clients`, {params});
  }

  setClient(client: Client) {
    this.client.next(client);
    localStorage.setItem('clientData', JSON.stringify(client));
  }

  getClient(): Client {
    const clientData = JSON.parse(localStorage.getItem('clientData'));
    return clientData;
  }

  removeClient() {
    localStorage.removeItem('clientData');
    this.client.next(undefined);
  }

  createClient(firstName, lastName, plusPoints) {
    return this.http
      .put<Client>('clients', {
        firstName,
        lastName,
        plusPoints,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
      );
  }

  refreshClient() {
    return this.fetchClients({firstName: '', clientKey: '', lastName: ''}).pipe(
      tap(res => {
        const curClient = this.getClient();
        this.setClient(res.find((x => x.clientKey === curClient.clientKey)));
      })
    );
  }
}
