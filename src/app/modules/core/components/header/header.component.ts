import {Component, OnInit} from '@angular/core';
import {AuthenticationStatusService} from '../../services/authentication-status.service';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLoggedIn;
    showDropdownMenu = false;

    constructor(public authStatusService: AuthenticationStatusService) {
        this.authStatusService._isLoggedIn.subscribe(status => {
            console.log(status);
            this.isLoggedIn = status;
        });
    }

    ngOnInit() {
    }

    showDropdown() {
        this.showDropdownMenu = !this.showDropdownMenu;
    }

    logout() {
        this.authStatusService.logout();
    }
}
