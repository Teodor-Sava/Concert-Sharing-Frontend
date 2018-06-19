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

    public getAllSpacesForAdmin(): Observable<any> {
        return this.http.get(URL.SPACES_ADMIN_URL);
    }


    public getBandById(id: number): Observable<any> {
        return this.http.get(URL.BANDS_URL + '/' + id);
    }

    public getConcertById(id: number): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + '/' + id);
    }

    public getSpaceById(id: number): Observable<any> {
        return this.http.get(`${URL.SPACES_URL}/${id}`);
    }

    public getPendingRequests(id: number): Observable<any> {
        return this.http.get(URL.BANDS_ADMIN_URL + '/' + id + '/pending-requests');
    }

    public getPendingRequestsForSpace(id: number): Observable<any> {
        return this.http.get(`${URL.SPACES_ADMIN_URL}/${id}/pending-requests`);
    }

    public getSpaceUpcomingConcerts(id: number): Observable<any> {
        return this.http.get(URL.CONCERTS_URL + '/upcoming/space/' + id);
    }

    // public getDoneDeals(id: number): Observable<any> {
    //     return this.http.get(URL.BANDS_ADMIN_URL + '/' + id +);
    // }

    public getAcceptedBandRequestsForConcerts(id: number) {
        return this.http.get(URL.CONCERTS_ADMIN_URL + '/' + id + '/bands/accepted');
    }

    public getAcceptedSpaceRequestsForConcerts(id: number) {
        return this.http.get(URL.CONCERTS_ADMIN_URL + '/' + id + '/spaces/accepted');
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

    public acceptSpaceRequest(request): Observable<any> {
        return this.http.post(`${URL.SPACE_REQUESTS_URL}/${request.id}/space/${request.space_id}/accept`, {});
    }

    public declineSpaceRequest(request): Observable<any> {
        return this.http.post(`${URL.SPACE_REQUESTS_URL}/${request.id}/space/${request.space_id}/decline`, {});
    }

    public createBandRequest(request): Observable<any> {
        return this.http.post(`${URL.CONCERT_REQUESTS_URL}`, request);
    }

    public createSpaceRequest(request): Observable<any> {
        return this.http.post(`${URL.SPACE_REQUESTS_URL}`, request);
    }


    public confirmBandForConcert(id: number): Observable<any> {
        return this.http.post(`${URL.CONCERT_REQUESTS_URL}/${id}/band/confirm`, {});
    }

    public confirmSpaceForConcert(id: number): Observable<any> {
        return this.http.post(`${URL.SPACE_REQUESTS_URL}/${id}/space/confirm`, {});
    }
}
