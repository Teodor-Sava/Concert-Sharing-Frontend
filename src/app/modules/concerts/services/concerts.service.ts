import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as URL from '../../core/constants/api';

@Injectable()
export class ConcertsService {

    constructor(private http: HttpClient) {
    }

    public getConcerts(offset?: number, searchParam?: string): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + this.getPage(offset) + this.getSearchParams(searchParam, offset));
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
