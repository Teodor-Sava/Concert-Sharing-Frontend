import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from '../../core/services/notification.service';
import {AdminService} from '../services/admin.service';
import {NotificationType} from '../../core/models/notification';

@Component({
    selector: 'app-concert-requests',
    templateUrl: './concert-requests.component.html',
    styleUrls: ['./concert-requests.component.scss']
})
export class ConcertRequestsComponent implements OnInit {
    concert;
    band;
    space;
    latitude;
    longitude;
    concert_public;
    pending_requests;
    upcomingConcerts;
    acceptedRequestsByTheBand;
    acceptedRequestsByTheSpaceAdmin;

    constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, public notificationService: NotificationService) {
        this.activatedRoute.params.subscribe(params => {
            this.getConcert(params.id);
        });
    }

    ngOnInit() {
    }

    getConcert(id: number) {
        this.adminService.getConcertById(id).subscribe(response => {
            this.concert = response.data;
            if (this.concert.concert_public) {
                this.concert_public = true;
            }
            if (Object.keys(response.related_objects.band).length === 0) {
                this.getAcceptedRequestsByTheBand(id);
            } else {
                this.band = response.related_objects.band;
            }
            if (Object.keys(response.related_objects.band).length === 0) {
                this.getAcceptedRequestBySpaceAdministrator(id);
            } else {
                this.space = response.related_objects.space;
                this.latitude = Number(this.space.lat);
                this.longitude = Number(this.space.lng);
                if (this.space.lat < 0) {
                    this.latitude = -this.latitude;
                }
                if (this.space.lng < 0) {
                    this.longitude = -this.longitude;
                }
            }
        });
    }

    getAcceptedRequestsByTheBand(id: number) {
        this.adminService.getAcceptedBandRequestsForConcerts(id).subscribe(response => {
            if (response) {
                this.acceptedRequestsByTheBand = response;
            }
        }, (error) => {
            this.notificationService.setNotification(error.error, NotificationType.ERROR);
        });
    }

    getAcceptedRequestBySpaceAdministrator(id: number) {
        this.adminService.getAcceptedSpaceRequestsForConcerts(id).subscribe(response => {
            if (response) {
                this.acceptedRequestsByTheSpaceAdmin = response;
            }
        }, (error) => {
            this.notificationService.setNotification(error.error, NotificationType.ERROR);
        });
    }


    confirmBandForConcert(id: number) {
        this.adminService.confirmBandForConcert(id).subscribe(response => {
            if (response) {
                this.notificationService.setNotification('Band was confirmed for the concert. The concert is public now', NotificationType.SUCCESS);
            }
        });
    }
}
