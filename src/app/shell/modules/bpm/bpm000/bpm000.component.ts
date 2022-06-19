import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {ClientsService} from '../clients.service';
import {LoaderService} from '../../../../shared/loader/loader.service';
import {Client} from '../client.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {
  formGroup: FormGroup;
  clients: Client[] = [];


  constructor(private router: Router, private route: ActivatedRoute,
              private clientService: ClientsService, public loader: LoaderService) {
  }

  onFetchClients() {
    this.fetchClients();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private fetchClients() {
   this.clientService
      .fetchClients({
        firstName: this.formGroup.get('firstName').value,
        lastName: this.formGroup.get('lastName').value,
        clientKey: this.formGroup.get('clientKey').value
      })
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((clients) => (this.clients = clients));
  }


  initForm() {
    this.formGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      clientKey: new FormControl('')
    });
  }

  clientClick(client) {
    this.clientService.setClient(client);
    this.router.navigate(['/krn/krnicp']);
  }

}
