import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConcertsRoutingModule} from './concerts-routing.module';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertsService} from './services/concerts.service';
import {ConcertDetailsComponent} from './components/concert-details/concert-details.component';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {CreateConcertComponent} from './components/create-concert/create-concert.component';
import {EditConcertComponent} from './components/edit-concert/edit-concert.component';
import {ConcertStatusComponent} from './components/concert-status/concert-status.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ConcertsRoutingModule,
        FormsModule,
        SharedModule,
        PaginationModule.forRoot()
    ],
    declarations: [ConcertsComponent, ConcertDetailsComponent, CreateConcertComponent, EditConcertComponent, ConcertStatusComponent],
    providers: [ConcertsService]
})
export class ConcertsModule {
}
