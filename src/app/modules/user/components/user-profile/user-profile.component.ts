import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    userDetails;
    userCountry;
    user;

    constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(params => {
            this.getUserProfile(params.id);
        });
    }

    getUserProfile(id) {
        console.log(id);
        this.usersService.getUserProfile(id).subscribe(response => {
            this.userDetails = response.data;
            console.log(this.userDetails);
            this.userCountry = response.related_objects.country;
            console.log(this.userCountry);
            this.user = response.related_objects.user;
            console.log(this.user);
        });
    }
}
