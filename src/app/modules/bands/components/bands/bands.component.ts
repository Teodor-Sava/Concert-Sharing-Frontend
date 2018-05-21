import {Component, OnInit} from '@angular/core';
import {BandsService} from '../../services/bands.service';
import {Band} from '../../../core/models/band';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-bands',
    templateUrl: './bands.component.html',
    styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {
    bands: Band[];
    currentPage: number;
    lastPage: number;
    showNoMoreOption = true;
    searchActivated = false;

    constructor(private bandsService: BandsService,
                private router: Router) {
    }

    ngOnInit() {
        this.getBands();
    }

    getBands(offset?: number, searchParams?: string) {
        this.bandsService.getBands(offset, searchParams).subscribe(response => {
            if (searchParams && offset) {
                this.bands = this.bands.concat(response.data);
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
            } else if (searchParams) {
                this.bands = this.bands.concat(response.data);
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
            } else {
                if (this.bands) {
                    this.bands = this.bands.concat(response.data);
                    this.currentPage = response.current_page;
                    this.lastPage = response.last_page;

                } else {
                    this.bands = response.data;
                    this.currentPage = response.current_page;
                    this.lastPage = response.last_page;

                }
            }
        });
    }

    navigateToBand(id) {
        this.router.navigate([this.router.url + '/id/', id]);
    }

    navigateToNewBand() {
        this.router.navigate([this.router.url + '/new']);
    }

    searchConcert(event) {
        if (event) {
            this.searchActivated = true;
            this.getBands(null, event);
        } else {
            this.searchActivated = false;
            this.getBands( event);
        }
    }

    onScroll() {
        if (this.searchActivated) {
            if (this.currentPage + 1 <= this.lastPage) {

            }
        }
        if (this.currentPage + 1 <= this.lastPage) {
            this.getBands(this.currentPage + 1);
        } else {
            this.showNoMoreOption = true;
        }
    }
}
