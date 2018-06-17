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

    public getAllConcertsForAdmin(): Observable<any> {
        return this.http.get(URL.CONCERTS_ADMIN_URL);
    }

    public getBandById(id: number): Observable<any> {
        return this.http.get(URL.BANDS_URL + '/' + id);
    }

    public getConcertById(id: number): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + '/' + id);
    }

    public getPendingRequests(id: number): Observable<any> {
        return this.http.get(URL.BANDS_ADMIN_URL + '/' + id + '/pending-requests');
    }

    // public getDoneDeals(id: number): Observable<any> {
    //     return this.http.get(URL.BANDS_ADMIN_URL + '/' + id +);
    // }

    public getAcceptedBandRequestsForConcerts(id: number) {
        return this.http.get(URL.CONCERTS_ADMIN_URL + '/' + id + '/accepted');
    }

    public getAcceptedSpaceRequestsForConcerts(id: number) {
        return this.http.get(URL.CONCERTS_ADMIN_URL + '/' + id + '/accepted');
    }

    public getBandUpcomingConcerts(id: number): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + '/upcoming/band/' + id);
    }

    public acceptConcertRequest(request): Observable<any> {
        return this.http.post(`${URL.CONCERT_REQUESTS_URL}/${request.id}/band/${request.band_id}/accept`, {});
    }

    public declineConcertRequest(request): Observable<any> {
        return this.http.post(`${URL.CONCERT_REQUESTS_URL}/${request.id}/band/${request.band_id}/decline`, {});
    }

    // public createBandRequest(bandRequest): Observable<any> {
    //     return this.http.post(`${URL.CONCERT_REQUESTS_URL}/${request.id}/band/${request.band_id}/decline`, {});
    // }

    public confirmBandForConcert(id: number): Observable<any> {
        return this.http.post(`${URL.CONCERT_REQUESTS_URL}/${id}/band/confirm`, {});
    }
}
