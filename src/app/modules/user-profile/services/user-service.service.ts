import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    recharge(cash) {
        const params = {"recharge" : cash};
        return this.http.patch('add_cash', params);
    }
}
