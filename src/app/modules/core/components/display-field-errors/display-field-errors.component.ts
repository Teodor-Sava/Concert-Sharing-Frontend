import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-display-field-errors',
    templateUrl: './display-field-errors.component.html',
    styleUrls: ['./display-field-errors.component.scss']
})
export class DisplayFieldErrorsComponent implements OnInit {
    @Input() displayError: boolean;
    @Input() messageError: string;

    constructor() {
    }

    ngOnInit() {
        console.log(this.displayError);
    }

}
