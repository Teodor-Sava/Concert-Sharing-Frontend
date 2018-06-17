import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from '../services/dashboard.service';

@Component({
    selector: 'app-concert-upcoming',
    templateUrl: './concert-upcoming.component.html',
    styleUrls: ['./concert-upcoming.component.scss']
})
export class ConcertUpcomingComponent implements OnInit {
    concerts;

    constructor(private dashService: DashboardService,
                private router: Router) {
    }

    ngOnInit() {
        this.getUpcomingConcerts();
    }

    getUpcomingConcerts() {
        this.dashService.getUpcomingConcertsForUser().subscribe(response => {
            if (response) {
                this.concerts = response.data;
            }
        });
    }

    goToConcert(concert) {
        this.router.navigate(['./concerts/id/', concert.id]);
    }
}
