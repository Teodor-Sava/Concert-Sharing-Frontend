import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as URL from '../../core/constants/api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminService {

    constructor(private http: HttpClient) {
    }

    public getAllBandsForAdmin(): Observable<any> {
        return this.http.get(URL.BANDS_ADMIN_URL);
    }

    public getBandById(id: number): Observable<any> {
        return this.http.get(URL.BANDS_URL + '/' + id);
    }

    public getPendingRequests(id: number): Observable<any> {
        return this.http.get(URL.BANDS_ADMIN_URL + '/' + id + '/pending-requests');
    }

    public getBandUpcomingConcerts(id: number): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + '/upcoming/band/' + id);
    }
}
