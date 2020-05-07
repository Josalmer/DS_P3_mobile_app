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

    removeProductToBasket(id): Observable<any> {
        const params = {"product_id" : id};
        return this.http.patch('remove_product_from_current_user_shopping_basket', params);
    }
}