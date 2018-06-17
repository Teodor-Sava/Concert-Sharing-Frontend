import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-concert-all',
    templateUrl: './concert-all.component.html',
    styleUrls: ['./concert-all.component.scss']
})
export class ConcertAllComponent implements OnInit {
    concerts;

    constructor(private dashService: DashboardService,
                private router: Router) {
    }

    ngOnInit() {
        this.getAllConcerts();
    }

    getAllConcerts() {
        this.dashService.getAllConcertsForUser().subscribe(response => {
            if (response) {
                this.concerts = response;
            }
        });
    }

    goToConcert(concert) {
        this.router.navigate(['./concerts/id/', concert.id]);
    }
}
