import {Injectable} from '@angular/core';
import * as URL from '../../core/constants/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(credentials: { email: string, password: string }): Observable<any> {
        console.log('cred', credentials);
        return this.http.post(URL.LOGIN_URL, credentials);
    }

    register(credentials: { name: string, email: string, password: string }): Observable<any> {
        return this.http.post(URL.REGISTER_URL, credentials);
    }
}
