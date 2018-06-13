import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {AuthenticationStatusService} from '../../core/services/authentication-status.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
    editMode = false;
    userDetails;
    userCountry;
    user;

    constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private authStatusService: AuthenticationStatusService) {
    }

    ngOnInit() {
        this.getUserProfile(this.authStatusService.getUser().id);
    }

    getUserProfile(id) {
        this.usersService.getUserProfile(id).subscribe(response => {
            this.userDetails = response.data;
            this.userCountry = response.related_objects.country;
            this.user = response.related_objects.user;
        });
    }

    enableEdit() {
        this.editMode = true;
    }
}
