import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private http: HttpClient
        ) { }

    getProduct(id): Observable<any> {
        return this.http.get('products/' + id);
    }

    addProductToBasket(id): Observable<any> {
        const params = {"product_id" : id};
        return this.http.patch('add_product_to_current_user_shopping_basket', params);
    }

    removeProductToBasket(id): Observable<any> {
        const params = {"product_id" : id};
        return this.http.patch('remove_product_from_current_user_shopping_basket', params);
    }
}