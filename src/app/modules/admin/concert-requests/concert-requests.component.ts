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
    acceptedRequestsByTheBand;
    acceptedRequestsByTheSpaceAdmin;

    constructor(private adminService: AdminService,
                private activatedRoute: ActivatedRoute,
                public notificationService: NotificationService) {
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
                this.band = response.related_objects.band;
                this.space = response.related_objects.space;
                this.latitude = Number(this.space.lat);
                this.longitude = Number(this.space.lng);
                if (this.space.lat < 0) {
                    this.latitude = -this.latitude;
                }
                if (this.space.lng < 0) {
                    this.longitude = -this.longitude;
                }
            } else {
                this.concert_public = false;
                if (response.related_objects.band === null) {
                    this.getAcceptedRequestsByTheBand(id);
                } else {
                    this.band = response.related_objects.band;
                }
                if (response.related_objects.space === null) {
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
            }
        });
    }

    getAcceptedRequestsByTheBand(id: number) {
        this.adminService.getAcceptedBandRequestsForConcerts(id).subscribe(response => {
            if (response.length > 0) {
                this.acceptedRequestsByTheBand = response;
            }
        });
    }

    getAcceptedRequestBySpaceAdministrator(id: number) {
        this.adminService.getAcceptedSpaceRequestsForConcerts(id).subscribe(response => {
            if (response.length > 0) {
                console.log(this.response);
                this.acceptedRequestsByTheSpaceAdmin = response;
            }
        });
    }


    confirmBandForConcert(request) {
        this.adminService.confirmBandForConcert(request.id).subscribe(response => {
            if (response) {
                this.acceptedRequestsByTheBand = null;
                this.band = response.band;
                this.concert = response.concert;
                if (response.concert.concert_public) {
                    this.notificationService.setNotification('Band was confirmed for the concert. Concert is public now .', NotificationType.SUCCESS);
                } else {
                    this.notificationService.setNotification('Band was confirmed for the concert.', NotificationType.SUCCESS);
                }
            }
        });
    }

    confirmSpaceForConcert(request) {
        this.adminService.confirmSpaceForConcert(request.id).subscribe(response => {
            if (response) {
                this.acceptedRequestsByTheSpaceAdmin = null;
                this.space = response.space;
                if (response.concert.concert_public) {
                    this.notificationService.setNotification('Space was confirmed for the concert. Concert is public now .', NotificationType.SUCCESS);
                } else {
                    this.notificationService.setNotification('Space was confirmed for the concert.', NotificationType.SUCCESS);
                }
            }
        });
    }
}
