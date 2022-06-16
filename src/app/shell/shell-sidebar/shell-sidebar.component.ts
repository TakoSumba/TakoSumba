import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'bg-shell-sidebar',
  templateUrl: './shell-sidebar.component.html',
  styleUrls: ['./shell-sidebar.component.scss']
})
export class ShellSidebarComponent implements OnInit {
    name: string;
    username: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.name = user.name;
      this.username = user.username;
    })
  }

}
