import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientsService} from '../modules/bpm/clients.service';
import {Client} from '../modules/bpm/client.model';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit, OnDestroy {
  client: Client;
  clientSub: Subscription;

  constructor(private clientService: ClientsService, private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.clientSub = this.clientService.client.subscribe(
      (res) => {
        this.client = res;
      }
    );
  }

  exitClient() {
    this.clientService.removeClient();
    this.router.navigate(['/bpm/bpm000']);
  }

  ngOnDestroy() {
    if (this.clientSub) {
      this.clientSub.unsubscribe();
    }
  }

}
