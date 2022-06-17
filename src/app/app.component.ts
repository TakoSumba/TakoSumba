import {Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver} from '@angular/core';
import {AuthService} from './shared/auth/auth.service';
import {Subscription} from 'rxjs';
import {AlertComponent} from './shared/alert/alert.component';
import {PlaceholderDirective} from './shared/placeholder.directive';
import {DialogService} from './dialog-service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSub: Subscription;
  closeSub: Subscription;

  @ViewChild(PlaceholderDirective) alertPlaceholder: PlaceholderDirective;

  constructor(private authService: AuthService, private cfr: ComponentFactoryResolver,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    this.dialogService.alert.subscribe((error) => {
      this.showError(error);
    });

  }

  private showError(error: string) {
    const alertComponentFactory = this.cfr.resolveComponentFactory(
      AlertComponent
    );
    this.alertPlaceholder.viewContainerRef.clear();
    const alertRef = this.alertPlaceholder.viewContainerRef.createComponent(
      alertComponentFactory
    );
    alertRef.instance.error = error;
    this.closeSub = alertRef.instance.closeClick.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertPlaceholder.viewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  onLogout() {
    this.authService.logout();
  }

}
