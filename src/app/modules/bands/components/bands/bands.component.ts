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

    constructor(private bandsService: BandsService,
                private router: Router) {
    }

    ngOnInit() {
        this.getBands();
    }

    getBands(offset?: number) {
        this.bandsService.getBands(offset).subscribe(response => {
            if (this.bands) {
                this.bands = this.bands.concat(response.data);
                this.bands.map(band => {
                    console.log(band);
                });
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
                console.log(this.currentPage);
                console.log(this.lastPage);
                console.log(this.bands);
            } else {
                this.bands = response.data;
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
                this.bands.map(band => {
                    console.log(band);
                });
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
        console.log(event);
    }

    onScroll() {
        if (this.currentPage + 1 <= this.lastPage) {
            this.getBands(this.currentPage + 1);
        } else {
            this.showNoMoreOption = true;
        }
    }
}
