import {Component, OnInit} from '@angular/core';
import {BandsService} from '../../services/bands.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Band} from '../../../core/models/data-models';
import {NotificationService} from '../../../core/services/notification.service';
import {NotificationType} from '../../../core/models/notification';

@Component({
    selector: 'app-bands-details',
    templateUrl: './bands-details.component.html',
    styleUrls: ['./bands-details.component.scss']
})
export class BandsDetailsComponent implements OnInit {
    band: Band;
    bandIsFavorite: boolean;
    upcomingConcerts = [];
    favoritesCss: string;

    constructor(private bandService: BandsService,
                public notificationService: NotificationService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.getBand(params.id);
            this.getBandFavoriteStatus(params.id);
            this.getBandUpcomingConcerts(params.id);
        });
    }

    getBand(id: number) {
        this.bandService.getBandById(id).subscribe(response => {
            this.band = response;
        });
    }

    getBandFavoriteStatus(id: number) {
        this.bandService.getBandFavoriteStatus(id).subscribe(response => {
            if (response === true) {
                this.bandIsFavorite = true;
            }
        });
    }

    getBandUpcomingConcerts(id: number) {
        this.bandService.getBandUpcomingConcerts(id).subscribe(response => {
            console.log(response);
            this.upcomingConcerts = response;
        });
    }

    goToConcert(concert) {
        this.router.navigate(['./concerts/id/', concert.id]);
    }

    removeFromFavorites(band) {
        this.bandService.removeFromFavorites(band.id).subscribe(response => {
            if (response) {
                this.bandIsFavorite = false;
                this.notificationService.setNotification(response.message, NotificationType.SUCCESS);
            } else {
                this.notificationService.setNotification('Something went wrong ', NotificationType.ERROR);
            }
        });
    }

    addToFavorites(band) {
        this.bandService.addToFavorites(band.id).subscribe(response => {
            if (response) {
                this.notificationService.setNotification(response.message, NotificationType.SUCCESS);
                this.bandIsFavorite = true;
            } else {
                this.notificationService.setNotification('Something went wrong ', NotificationType.ERROR);
            }
        });
    }

    getBandPastConcerts(id: number) {

    }

    changeFavoritesCss() {
        this.favoritesCss = '';
    }
}
