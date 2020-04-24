import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  authToken: string;
  storageKey = 'auth_token';

  constructor(private storage: Storage) { }

  async getAuthToken(): Promise<string> {
    if (!this.authToken) {
      await this.storage.get(this.storageKey).then(authToken => {
        this.authToken = authToken;
      });
    }
    return this.authToken;
  }

  setAuthToken(authToken: string) {
    this.storage.set(this.storageKey, authToken);
    this.authToken = authToken;
  }

  clearAuthToken() {
    this.storage.remove(this.storageKey);
    this.authToken = undefined;
  }

  isUserLogged(): boolean {
    return !!this.authToken;
  }
}
