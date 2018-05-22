import {Component, OnInit} from '@angular/core';
import {ConcertsService} from '../../services/concerts.service';
import {Router} from '@angular/router';
import {Concert} from '../../../core/models/data-models';

@Component({
    selector: 'app-concerts',
    templateUrl: './concerts.component.html',
    styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit {
    concerts: Concert[];
    currentPage: number;
    lastPage: number;
    showNoMoreOption = true;
    searchActivated = false;

    constructor(private concertsService: ConcertsService,
                private router: Router) {
    }

    ngOnInit() {
        this.getConcerts();
    }

    getConcerts(offset?: number, searchParams?: string) {
        this.concertsService.getConcerts(offset, searchParams).subscribe(response => {
            if (searchParams && offset) {
                this.concerts = this.concerts.concat(response.data);
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
            } else if (searchParams) {
                this.concerts = this.concerts.concat(response.data);
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
            } else {
                if (this.concerts) {
                    this.concerts = this.concerts.concat(response.data);
                    this.currentPage = response.current_page;
                    this.lastPage = response.last_page;

                } else {
                    this.concerts = response.data;
                    this.currentPage = response.current_page;
                    this.lastPage = response.last_page;

                }
            }
        });
    }

    navigateToConcert(id) {
        this.router.navigate([this.router.url + '/id/', id]);
    }

    navigateToNewConcert() {
        this.router.navigate([this.router.url + '/new']);
    }

    onScroll() {
        if (this.searchActivated) {
            if (this.currentPage + 1 <= this.lastPage) {

            }
        }
        if (this.currentPage + 1 <= this.lastPage) {
            this.getConcerts(this.currentPage + 1);
        } else {
            this.showNoMoreOption = true;
        }
    }
}
