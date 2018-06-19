import {Component, OnInit} from '@angular/core';
import {Concert} from '../../core/models/data-models';
import {Router} from '@angular/router';
import {SpacesService} from '../services/spaces.service';

@Component({
    selector: 'app-spaces',
    templateUrl: './spaces.component.html',
    styleUrls: ['./spaces.component.scss']
})
export class SpacesComponent implements OnInit {

    spaces: Concert[];
    currentPage: number;
    lastPage: number;
    showNoMoreOption = true;
    searchActivated = false;

    constructor(private spacesService: SpacesService,
                private router: Router) {
    }

    ngOnInit() {
        this.getSpaces();
    }

    getSpaces(offset?: number, searchParams?: string) {
        this.spacesService.getSpaces(offset, searchParams).subscribe(response => {
            if (searchParams && offset) {
                this.spaces = this.spaces.concat(response.data);
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
            } else if (searchParams) {
                this.spaces = this.spaces.concat(response.data);
                this.currentPage = response.current_page;
                this.lastPage = response.last_page;
            } else {
                if (this.spaces) {
                    this.spaces = this.spaces.concat(response.data);
                    this.currentPage = response.current_page;
                    this.lastPage = response.last_page;

                } else {
                    this.spaces = response.data;
                    this.currentPage = response.current_page;
                    this.lastPage = response.last_page;

                }
            }
        });
    }

    navigateToSpace(id) {
        this.router.navigate([this.router.url + '/id/', id]);
    }

    navigateToNewSpace() {
        this.router.navigate([this.router.url + '/new']);
    }

    onScroll() {
        if (this.searchActivated) {
            if (this.currentPage + 1 <= this.lastPage) {

            }
        }
        if (this.currentPage + 1 <= this.lastPage) {
            this.getSpaces(this.currentPage + 1);
        } else {
            this.showNoMoreOption = true;
        }
    }
}
