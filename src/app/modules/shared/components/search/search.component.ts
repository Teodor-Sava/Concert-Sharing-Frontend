import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeUntil';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    results: any[] = [];
    queryField: FormControl = new FormControl();
    showFilter = false;
    destroy$: Subject<boolean> = new Subject<boolean>();
    placeHolder;
    @Input() parentComponent: string;
    @Input() enabledForm?: boolean;
    @Output() selectedValue ?: EventEmitter<number> = new EventEmitter<number>();

    constructor(private searchService: SearchService, private eRef: ElementRef, private router: Router) {
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
            this.showFilter = true;
        } else {
            this.showFilter = false;
            this.results = null;
            this.queryField.setValue('');
        }
    }

    ngOnInit() {
        this.placeHolder = `Search for ${this.parentComponent}`;
    }

    getSearchData() {
        this.showFilter = true;
        this.queryField.valueChanges
            .debounceTime(500)
            .switchMap((query) => {
                console.log(query);
                if (query !== '') {
                    return this.searchService.search(query, this.parentComponent);
                }
                return this.searchService.search('', this.parentComponent);
            })
            .takeUntil(this.destroy$)
            .subscribe(response => {
                console.log(response);
                this.results = response.data;
            });
    }

    selectResult(result) {
        if (this.enabledForm) {
            this.selectedValue.emit(result);
            this.showFilter = false;
            this.results = null;
            this.queryField.setValue('');
        } else {
            this.router.navigate([this.router.url + '/id/', result.id]);
        }
    }
}


