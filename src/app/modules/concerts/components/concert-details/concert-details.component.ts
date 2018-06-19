import {Component, OnInit} from '@angular/core';
import {ConcertsService} from '../../services/concerts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Concert} from '../../../core/models/data-models';
import {AuthenticationStatusService} from '../../../core/services/authentication-status.service';

@Component({
    selector: 'app-concert-details',
    templateUrl: './concert-details.component.html',
    styleUrls: ['./concert-details.component.scss']
})
export class ConcertDetailsComponent implements OnInit {
    concert: Concert;
    reviews;
    band;
    space;
    admin;
    loggedInUser;
    enableReviewForm = false;
    latitude: number;
    longitude: number;
    hideBuyTicket = false;

    constructor(private concertsService: ConcertsService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private authStatusService: AuthenticationStatusService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.getConcert(params.id);
            this.loggedInUser = this.authStatusService.getUser();
        });
    }

    getConcert(id: number) {
        this.concertsService.getConcertById(id).subscribe((response: { data: Concert, related_objects: { band: {}, space: {}, user: {}, review: any } }) => {
            this.concert = response.data;
            this.band = response.related_objects.band;
            this.space = response.related_objects.space;
            this.admin = response.related_objects.user;
            const concertDate = new Date(this.concert.concert_start);
            if (concertDate.getTime() < Date.now()) {
                this.hideBuyTicket = true;
                this.reviews = response.related_objects.review;
            }
            this.latitude = Number(this.space.lat);
            this.longitude = Number(this.space.lng);
            if (this.longitude < 0) {
                this.longitude = -this.longitude;
            }
            if (this.latitude < 0) {
                this.latitude = -this.latitude;
            }
        });
    }

    goToUserProfile(user) {
        this.router.navigate(['./users/id/', user.id]);
    }

    showReviewsForm() {
        this.enableReviewForm = true;
    }

    hideForm(){
        this.enableReviewForm = true;
    }
}
