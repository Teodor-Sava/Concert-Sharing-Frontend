import {Component, OnInit} from '@angular/core';
import {AuthenticationStatusService} from '../../core/services/authentication-status.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpacesService} from '../services/spaces.service';

@Component({
    selector: 'app-spaces-details',
    templateUrl: './spaces-details.component.html',
    styleUrls: ['./spaces-details.component.scss']
})
export class SpacesDetailsComponent implements OnInit {
    space;
    latitude;
    longitude;
    concerts;

    constructor(private spacesService: SpacesService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.getSpace(params.id);
            this.getConcerts(params.id);
        });
    }

    getSpace(id: number) {
        this.spacesService.getSpaceById(id).subscribe(response => {
            this.space = response;
            this.latitude = Number(this.space.lat);
            this.longitude = Number(this.space.lng);
            if (this.longitude < 0) {
                this.longitude = -this.longitude;
            }
            if (this.latitude < 0) {
                this.latitude = -this.latitude;
            }
        });
    }

    getConcerts(id: number) {
        this.spacesService.getConcertForSpace(id).subscribe(response => {
            this.concerts = response;
        });
    }
}
