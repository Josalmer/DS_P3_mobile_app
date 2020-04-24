import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CanActivate } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sessionService: SessionService, private navCtrl: NavController) {}

  async canActivate(): Promise<boolean> {
    const currentUserTokenExists = await this.sessionService.getAuthToken();

    if (!currentUserTokenExists) { this.navCtrl.navigateRoot(['login']); }
    return !!currentUserTokenExists;
  }
}
