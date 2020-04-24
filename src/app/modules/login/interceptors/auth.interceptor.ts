import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../../shared/services/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private sessionService: SessionService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.sessionService.authToken;
        if (authToken) {
            req = req.clone({
                setHeaders: { Authorization: authToken }
            });
        }
        return next.handle(req);
    }
}
