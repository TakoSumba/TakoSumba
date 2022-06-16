import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../modules/bpm/clients.service';
import {Client} from '../modules/bpm/client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientsService, private router: Router) {
  }

  ngOnInit(): void {
    this.clientService.client.subscribe(
      (res) => {
        this.client = res;
      }
    );
  }
  exitClient(){
    this.clientService.removeClient();
    this.router.navigate(['/bpm/bpm000']);
  }

}
