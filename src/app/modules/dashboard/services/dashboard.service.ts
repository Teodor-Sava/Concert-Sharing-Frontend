import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as URL from '../../core/constants/api';
import {AuthenticationStatusService} from '../../core/services/authentication-status.service';

@Injectable()
export class DashboardService {
    user;

    constructor(private http: HttpClient, public authStatusService: AuthenticationStatusService) {
        this.user = this.authStatusService.getUser();
    }

    public getUpcomingConcertsForUser(): Observable<any> {
        return this.http.get(URL.DASHBOARD_URL + this.user.id + '/upcoming');
    }

    public getPastConcertsForUser(): Observable<any> {
        return this.http.get(URL.DASHBOARD_URL + this.user.id + '/past');
    }

    public getAllConcertsForUser(): Observable<any> {
        return this.http.get(URL.DASHBOARD_URL + this.user.id + '/all');
    }

    public getFavoriteBandsForUser(): Observable<any> {
        return this.http.get(URL.FAVORITE_BANDS_URL + 'user/current_user');
    }

    public removeBandFromFavorites(band): Observable<any> {
        return this.http.delete(URL.FAVORITE_BANDS_URL + 'band/' + band.id);
    }

}
