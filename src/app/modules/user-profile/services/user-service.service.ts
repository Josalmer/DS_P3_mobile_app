import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { SessionService } from '../../shared/services/session.service';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {

    constructor(
        private http: HttpClient
        ) { }

    getUserProfile(): Observable<any> {
        return this.http.get('user_profile');
    }

    updateProfile(params) {
        return this.http.patch('user_profile', params);
    }
}
