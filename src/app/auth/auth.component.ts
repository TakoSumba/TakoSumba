import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../shell/modules/bpm/clients.service';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'bg-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.user.value) {
      this.router.navigate(['/bpm/bpm000']);
    }
  }

}
