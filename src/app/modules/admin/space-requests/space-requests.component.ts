import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationType} from '../../core/models/notification';
import {NotificationService} from '../../core/services/notification.service';
import {AdminService} from '../services/admin.service';

@Component({
    selector: 'app-space-requests',
    templateUrl: './space-requests.component.html',
    styleUrls: ['./space-requests.component.scss']
})
export class SpaceRequestsComponent implements OnInit {

    space;
    pending_requests;
    upcomingConcerts;

    constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, public notificationService: NotificationService) {
        this.activatedRoute.params.subscribe(params => {
            this.getSpace(params.id);
        });
    }

    ngOnInit() {
    }

    getSpace(id: number) {
        this.adminService.getSpaceById(id).subscribe(response => {
            this.space = response;
            console.log(this.space);
            if (this.space) {
                this.getPendingRequests(this.space.id);
                this.getSpaceUpcomingConcerts(this.space.id);
            }
        });
    }

    getPendingRequests(id: number) {
        this.adminService.getPendingRequestsForSpace(id).subscribe(response => {
            this.pending_requests = response.pending_requests;
        });
    }

    getSpaceUpcomingConcerts(id: number) {
        this.adminService.getSpaceUpcomingConcerts(id).subscribe(response => {
            this.upcomingConcerts = response;
        });
    }

    getDoneDealsForBand(id: number) {

    }

    acceptSpaceRequest(request) {
        this.adminService.acceptSpaceRequest(request).subscribe(response => {
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

    declineSpaceRequest(request) {
        this.adminService.declineSpaceRequest(request).subscribe(response => {
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
