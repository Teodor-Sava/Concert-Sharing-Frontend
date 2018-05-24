import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../../core/services/core.service';
import {BandsService} from '../../../bands/services/bands.service';
import {ConcertsService} from '../../services/concerts.service';

@Component({
    selector: 'app-create-concert',
    templateUrl: './create-concert.component.html',
    styleUrls: ['./create-concert.component.scss']
})
export class CreateConcertComponent implements OnInit {
    concertForm: FormGroup;

    constructor(private bandsService: ConcertsService, private coreService: CoreService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.concertForm = this.fb.group({
            name: new FormControl('', Validators.required),
            image_url: new FormControl('', Validators.required),
            no_members: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
            founded_at: new FormControl('', Validators.required),
            short_description: new FormControl('', Validators.required),
            long_description: new FormControl('', Validators.required),
            band_requests: new FormControl('', Validators.required),
            band_price: new FormControl('', Validators.required),
            genres: new FormControl('', Validators.required),
        });
    }
}
