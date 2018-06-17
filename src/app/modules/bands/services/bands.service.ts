import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as URL from '../../core/constants/api';
import {Observable} from 'rxjs/Observable';
import {Band} from '../../core/models/data-models';

@Injectable()
export class BandsService {

    constructor(private http: HttpClient) {
    }

    public getBands(offset?: number, searchParam?: string): Observable<any> {
        return this.http.get(URL.BANDS_URL + this.getPage(offset) + this.getSearchParams(searchParam, offset));

    }

    public getBandById(id: number): Observable<any> {
        return this.http.get(URL.BANDS_URL + '/' + id);
    }

    public createBand(band): Observable<any> {
        return this.http.post(URL.BANDS_URL, band);
    }

    public editBand(band: Band): Observable<any> {
        return this.http.patch(URL.BANDS_URL, band);
    }

    public getBandFavoriteStatus(id: number): Observable<any> {
        return this.http.get(URL.FAVORITE_BANDS_URL + 'band/' + id + '/status');
    }

    public getBandUpcomingConcerts(id: number): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + '/upcoming/band/' + id);
    }

    public addToFavorites(id: number): Observable<any> {
        return this.http.post(URL.FAVORITE_BANDS_URL + 'band/' + id, {});
    }

    public removeFromFavorites(id: number): Observable<any> {
        return this.http.delete(URL.FAVORITE_BANDS_URL + 'band/' + id);
    }

    private getSearchParams(searchParam, offset) {
        if (searchParam) {
            if (offset) {
                return `&search=${searchParam}`;
            } else {
                return `?search=${searchParam}`;
            }
        }
        return '';
    }

    private getPage(offset) {
        if (offset) {
            return `?page=${offset}`;
        }
        return '';
    }
}
