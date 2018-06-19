import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as URL from '../../core/constants/api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpacesService {

    constructor(private http: HttpClient) {
    }

    getSpaces(offset?: number, searchParam?: string): Observable<any> {
        return this.http.get(URL.SPACES_URL + this.getPage(offset) + this.getSearchParams(searchParam, offset));
    }

    public getSpaceById(id: number): Observable<any> {
        return this.http.get(URL.SPACES_URL + '/' + id);
    }

    public getConcertForSpace(id: number): Observable<any> {
        return this.http.get(`${URL.SPACES_URL}/${id}/concerts`);
    }

    public createSpace(space): Observable<any> {
        return this.http.post(`${URL.SPACES_URL}`, space);
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
