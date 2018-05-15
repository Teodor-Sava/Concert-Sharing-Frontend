import {Component, OnInit} from '@angular/core';
import {ConcertsService} from '../../services/concerts.service';

@Component({
    selector: 'app-concerts',
    templateUrl: './concerts.component.html',
    styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit {
    concerts = ['', '', '', '', '', '', ''];

    constructor(private concertsService: ConcertsService) {
    }

    ngOnInit() {
    }

}
