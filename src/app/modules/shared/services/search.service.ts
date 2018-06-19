import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as URL from '../../core/constants/api';

@Injectable()
export class SearchService {
    bandUrl = URL.BANDS_URL + '?search=';
    concertUrl = URL.CONCERTS_URL + '?search=';

    spaceUrl = URL.SPACES_URL + '?search=';

    constructor(private http: HttpClient) {
    }

    search(searchQuery: string, parentComponent): Observable<any> {
        let searchUrl;
        switch (parentComponent) {
            case 'band' : {
                searchUrl = this.bandUrl + searchQuery;
                break;
            }
            case 'concert' : {
                searchUrl = this.concertUrl + searchQuery;
                break;
            }
            case 'spaces': {
                searchUrl = this.spaceUrl + searchQuery;
            }
        }
        return this.http.get(searchUrl);
    }
}
