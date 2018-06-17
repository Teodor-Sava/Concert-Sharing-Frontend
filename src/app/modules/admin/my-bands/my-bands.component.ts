import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-my-bands',
    templateUrl: './my-bands.component.html',
    styleUrls: ['./my-bands.component.scss']
})
export class MyBandsComponent implements OnInit {
    bands;

    constructor(private adminService: AdminService, private router: Router) {
    }

    ngOnInit() {
        this.getAdminBands();
    }

    getAdminBands() {
        this.adminService.getAllBandsForAdmin().subscribe(response => {
            this.bands = response;
        });
    }

    goToRequests(band) {
        this.router.navigate([`./admin/bands/id/${band.id}/requests`]);
    }
}
