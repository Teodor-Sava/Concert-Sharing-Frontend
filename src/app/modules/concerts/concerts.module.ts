import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConcertsRoutingModule} from './concerts-routing.module';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertsService} from './services/concerts.service';
import {ConcertDetailsComponent} from './components/concert-details/concert-details.component';
import {BsDatepickerModule, PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateConcertComponent} from './components/create-concert/create-concert.component';
import {EditConcertComponent} from './components/edit-concert/edit-concert.component';
import {ConcertStatusComponent} from './components/concert-status/concert-status.component';
import {SharedModule} from '../shared/shared.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {AgmCoreModule} from '@agm/core';
import {ConcertReviewsComponent} from './components/concert-reviews/concert-reviews.component';
import * as Keys from '../core/constants/api.keys';

@NgModule({
    imports: [
        CommonModule,
        ConcertsRoutingModule,
        InfiniteScrollModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: Keys.mapsKey
        })
    ],
    declarations: [ConcertsComponent, ConcertDetailsComponent, CreateConcertComponent, EditConcertComponent, ConcertStatusComponent, ConcertReviewsComponent],
    providers: [ConcertsService]
})
export class ConcertsModule {
}
