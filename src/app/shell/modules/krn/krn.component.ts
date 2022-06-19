import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../bpm/clients.service';
import {Client} from '../bpm/client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-krn',
  templateUrl: './krn.component.html',
  styleUrls: ['./krn.component.scss']
})
export class KrnComponent implements OnInit {
  client: Client;

  constructor() {
  }

  ngOnInit(): void {
  }

}
