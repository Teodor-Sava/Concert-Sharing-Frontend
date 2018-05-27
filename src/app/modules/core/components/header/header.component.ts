import {Component, OnInit} from '@angular/core';
import {AuthenticationStatusService} from '../../services/authentication-status.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLoggedIn;

    constructor(public authStatusService: AuthenticationStatusService) {
        this.authStatusService.userLoginStatus().subscribe(status => {
            this.isLoggedIn = status;
        });
    }

    ngOnInit() {
    }

}
