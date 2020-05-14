import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(
        private http: HttpClient
        ) { }

    getBasketProducts(): Observable<any> {
        return this.http.get('shopping_baskets');
    }

    buyAll(): Observable<any> {
        return this.http.patch('buy_all_shopping_basket_products', {});
    }
}