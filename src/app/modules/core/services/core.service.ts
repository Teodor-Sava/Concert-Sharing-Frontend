import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as URL from '../constants/api';

@Injectable()
export class CoreService {

    constructor(private http: HttpClient) {
    }

    public getCountries(): Observable<any> {
        return this.http.get(URL.COUNTRIES_URL);
    }

    public getGenres(): Observable<any> {
        return this.http.get(URL.GENRES_URL);
    }
}
