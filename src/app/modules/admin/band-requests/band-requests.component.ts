import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from '../../core/services/notification.service';
import {NotificationType} from '../../core/models/notification';

@Component({
    selector: 'app-band-requests',
    templateUrl: './band-requests.component.html',
    styleUrls: ['./band-requests.component.scss']
})
export class BandRequestsComponent implements OnInit {
    band;
    pending_requests;
    upcomingConcerts;

    constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, public notificationService: NotificationService) {
        this.activatedRoute.params.subscribe(params => {
            this.getBand(params.id);
        });
    }

    ngOnInit() {
    }

    getBand(id: number) {
        this.adminService.getBandById(id).subscribe(response => {
            this.band = response;
            if (this.band) {
                this.getPendingRequests(id);
                this.getBandUpcomingConcerts(id);
            }
        });
    }

    getPendingRequests(id: number) {
        this.adminService.getPendingRequests(id).subscribe(response => {
            this.pending_requests = response;
            console.log(response);
        });
    }

    getBandUpcomingConcerts(id: number) {
        this.adminService.getBandUpcomingConcerts(id).subscribe(response => {
            console.log(response);
            this.upcomingConcerts = response;
        });
    }

    getDoneDealsForBand(id: number) {

    }

    acceptConcertRequest(request) {
        this.adminService.acceptConcertRequest(request).subscribe(response => {
            if (response) {
                if (this.pending_requests.length > 1) {
                    const indexOfRequest = this.pending_requests.indexOf(request);
                    this.pending_requests = this.pending_requests.slice(indexOfRequest, indexOfRequest + 1);
                } else {
                    this.pending_requests = [];
                }
                this.notificationService.setNotification('You have accepted the concerts request', NotificationType.SUCCESS);
            }
        });
    }

    declineConcertRequest(request) {
        this.adminService.declineConcertRequest(request).subscribe(response => {
            if (response) {
                if (this.pending_requests.length > 1) {
                    const indexOfRequest = this.pending_requests.indexOf(request);
                    this.pending_requests = this.pending_requests.slice(indexOfRequest, indexOfRequest + 1);
                } else {
                    this.pending_requests = [];
                }
                this.notificationService.setNotification('You have declined the concerts request', NotificationType.ERROR);
            }
        });
    }
}
