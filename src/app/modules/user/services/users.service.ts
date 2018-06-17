import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as URL from '../../core/constants/api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {
    }

    public getUserProfile(id): Observable<any> {
        return this.http.get(URL.USERS_URL + '/' + id + '/details');
    }
}
