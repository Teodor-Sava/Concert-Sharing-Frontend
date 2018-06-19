import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../services/admin.service';

@Component({
    selector: 'app-my-spaces',
    templateUrl: './my-spaces.component.html',
    styleUrls: ['./my-spaces.component.scss']
})
export class MySpacesComponent implements OnInit {
    spaces;

    constructor(private adminService: AdminService, private router: Router) {
    }

    ngOnInit() {
        this.getAdminSpaces();
    }

    getAdminSpaces() {
        this.adminService.getAllSpacesForAdmin().subscribe(response => {
            this.spaces = response;
        });
    }

    goToRequests(space) {
        this.router.navigate([`./admin/spaces/id/${space.id}/requests`]);
    }
}
