import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-band-requests',
    templateUrl: './band-requests.component.html',
    styleUrls: ['./band-requests.component.scss']
})
export class BandRequestsComponent implements OnInit {
    band;
    pending_requests;
    upcomingConcerts;

    constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {
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

    acceptConcertRequest(concert) {

    }

    declineConcertRequest(concert) {

    }
}
