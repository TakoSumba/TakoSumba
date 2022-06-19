import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


import {ClientsService} from '../bpm/clients.service';

@Injectable({
  providedIn: 'root',
})
export class KrnGuard implements CanActivate {
  constructor(private clientService: ClientsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.clientService.client.pipe(
      take(1),
      map((client) => {
        if (client) {
          return true;
        } else {
          this.router.navigate(['/bpm/bpm000']);
        }
      })
    );
  }
}
