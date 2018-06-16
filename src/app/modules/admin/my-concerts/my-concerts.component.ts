import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../services/admin.service';

@Component({
    selector: 'app-my-concerts',
    templateUrl: './my-concerts.component.html',
    styleUrls: ['./my-concerts.component.scss']
})
export class MyConcertsComponent implements OnInit {
    concerts;

    constructor(private adminService: AdminService, private router: Router) {
    }

    ngOnInit() {
        this.getAdminConcerts();
    }

    getAdminConcerts() {
        this.adminService.getAllConcertsForAdmin().subscribe(response => {
            this.concerts = response;
        });
    }

    goToRequests(concert) {
        this.router.navigate([`./admin/concerts/id/${concert.id}/requests`]);
    }
}
