import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http: HttpClient
        ) { }

    getCategories(): Observable<any> {
        return this.http.get('categories');
    }

    getCategory(id): Observable<any> {
        return this.http.get('categories/' + id);
    }
}