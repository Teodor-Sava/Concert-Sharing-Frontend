import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from '../services/dashboard.service';

@Component({
    selector: 'app-concert-history',
    templateUrl: './concert-history.component.html',
    styleUrls: ['./concert-history.component.scss']
})
export class ConcertHistoryComponent implements OnInit {

    concerts;

    constructor(private dashService: DashboardService,
                private router: Router) {
    }

    ngOnInit() {
        this.getPastConcerts();
    }

    getPastConcerts() {
        this.dashService.getPastConcertsForUser().subscribe(response => {
            if (response) {
                this.concerts = response.data;
            }
        });
    }

    goToConcert(concert) {
        this.router.navigate(['./concerts/id/', concert.id]);
    }

}
