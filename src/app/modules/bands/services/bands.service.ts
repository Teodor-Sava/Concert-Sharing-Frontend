import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as URL from '../../core/constants/api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BandsService {

    constructor(private http: HttpClient) {
    }

    public getBands(offset?: number, searchParam?: string): Observable<any> {
        return this.http.get(URL.BANDS_URL + this.getPage(offset) + this.getSearchParams(searchParam, offset));
    }

    public getPage(offset) {
        if (offset) {
            return `?page=${offset}`;
        }
        return '';
    }

    public getSearchParams(searchParam, offset) {
        if (searchParam) {
            if (offset) {
                return `&search=${searchParam}`;
            } else {
                return `?search=${searchParam}`;
            }
        }
        return '';
    }
}
