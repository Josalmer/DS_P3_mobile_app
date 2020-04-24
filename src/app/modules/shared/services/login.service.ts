import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { SessionService } from './session.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private sessionService: SessionService
    ) { }

  login(email: string, password: string): Observable<any> {
    const loginObject = { api_v1_user: { email: email, password:  password } };
    return this.http.post('users/sign_in', loginObject).pipe(
      tap( this.doLogin )
    );
  }

  logout(): Observable<any> {
    return this.http.delete('users/sign_out');
  }

  sendPasswordRecovery(email: string) {
    const passwordRecoveryObject = { api_v1_user: { email: email } };
    return this.http.post('users/password', passwordRecoveryObject);
  }

  createAccount(newUserObject: any): Observable<any> {
    const creteAccountObject = { api_v1_user: newUserObject };
    return this.http.post('users', creteAccountObject);
  }

  doLogin = (response: any) => {
    const authToken = 'Bearer ' + response.auth_token;
    this.sessionService.setAuthToken(authToken);
    this.navCtrl.navigateRoot(['/']);
  }

}
