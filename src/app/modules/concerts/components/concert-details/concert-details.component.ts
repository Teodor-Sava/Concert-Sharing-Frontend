import {Component, OnInit} from '@angular/core';
import {ConcertsService} from '../../services/concerts.service';
import {ActivatedRoute} from '@angular/router';
import {Concert} from '../../../core/models/data-models';

@Component({
    selector: 'app-concert-details',
    templateUrl: './concert-details.component.html',
    styleUrls: ['./concert-details.component.scss']
})
export class ConcertDetailsComponent implements OnInit {
    concert: Concert;
    band;
    space;
    user;
    latitude: number;
    longitude: number;

    constructor(private concertsService: ConcertsService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.getConcert(params.id);
        });
    }

    getConcert(id: number) {
        this.concertsService.getConcert(id).subscribe(response => {
            this.concert = response.data;
            this.band = response.related_objects.band;
            this.space = response.related_objects.space;
            this.user = response.related_objects.user;
            this.latitude = parseInt(this.space.lat);
            this.longitude = parseInt(this.space.lng);
            if (this.longitude < 0) {
                this.longitude = -this.longitude;
            }
            if (this.latitude < 0) {
                this.latitude = -this.latitude;
            }
        });
    }
}
