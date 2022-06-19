import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/auth.service';
import {ClientsService} from '../modules/bpm/clients.service';

@Component({
  selector: 'bg-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent implements OnInit {

  constructor(private authService: AuthService, private clientService: ClientsService) { }

  ngOnInit(): void {
  }
  onLogout() {
    this.authService.logout();
    this.clientService.removeClient();
  }
}


