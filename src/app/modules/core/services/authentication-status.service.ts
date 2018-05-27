import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationStatusService {
    private _isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

    constructor() {
    }

    public setLocalStorageToken(token) {
        localStorage.setItem('token', token);
        this._isLoggedIn.next(true);
    }

    public getToken() {
        const userToken = localStorage.getItem('token');
        if (userToken) {
            return userToken;
        }
        return false;
    }

    public userLoginStatus() {
        this._isLoggedIn.next(!!this.getToken());
        return this._isLoggedIn.asObservable();
    }
}
