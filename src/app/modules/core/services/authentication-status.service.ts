import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationStatusService {
    public _isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

    constructor() {
    }

    public setLocalStorage(response) {
        localStorage.setItem('user_id', response.user.id);
        localStorage.setItem('user_name', response.user.name);
        localStorage.setItem('user_email', response.user.email);
        localStorage.setItem('token', response.access_token);
        this._isLoggedIn.next(true);
    }

    public getToken() {
        const userToken = localStorage.getItem('token');
        if (userToken) {
            return userToken;
        }
        return false;
    }

    public getUser() {
        const user = {
            'id': localStorage.getItem('user_id'),
            'email': localStorage.getItem('user_email'),
            'name': localStorage.getItem('user_name')
        };
        return user;
    }

    public logout() {
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('token');
        this._isLoggedIn.next(false);
    }

    public userLoginStatus() {
        return this._isLoggedIn.asObservable();
    }
}
