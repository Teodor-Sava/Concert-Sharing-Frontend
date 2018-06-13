import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthenticationStatusService} from '../services/authentication-status.service';

@Injectable()
export class TokenApiInterceptor implements HttpInterceptor {
    token;

    constructor(public authStatusService: AuthenticationStatusService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {;
        this.token = this.authStatusService.getToken();
        if (this.token) {
            console.log(this.token);
            const clonnedRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`
                }
            });

            return next.handle(clonnedRequest);
        }
        return next.handle(request);
    }
}
