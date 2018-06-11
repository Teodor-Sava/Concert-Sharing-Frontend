import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {NotificationService} from '../../core/services/notification.service';
import {NotificationType} from '../../core/models/notification';
import {Router} from '@angular/router';

@Component({
    selector: 'app-favorite-bands',
    templateUrl: './favorite-bands.component.html',
    styleUrls: ['./favorite-bands.component.scss']
})
export class FavoriteBandsComponent implements OnInit {
    favoriteBands;

    constructor(private dashboardService: DashboardService,
                public notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        this.getFavoriteBands();
    }

    getFavoriteBands() {
        this.dashboardService.getFavoriteBandsForUser().subscribe(response => {
            this.favoriteBands = response.data;
        });
    }

    goToBand(band) {
        this.router.navigate(['./bands/id/', band.id]);
    }

    removeBandFromFavorites(band) {
        this.dashboardService.removeBandFromFavorites(band).subscribe(response => {
            if (response) {
                this.notificationService.setNotification('Band has been removed from Favorites', NotificationType.SUCCESS);
                this.getFavoriteBands();
            }
        });
    }
}
