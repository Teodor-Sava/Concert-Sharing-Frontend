import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConcertsRoutingModule} from './concerts-routing.module';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertsService} from './services/concerts.service';
import {ConcertDetailsComponent} from './components/concert-details/concert-details.component';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { CreateConcertComponent } from './components/create-concert/create-concert.component';
import { StatusConcertComponent } from './components/status-concert/status-concert.component';
import { EditConcertComponent } from './components/edit-concert/edit-concert.component';

@NgModule({
    imports: [
        CommonModule,
        ConcertsRoutingModule,
        FormsModule,
        PaginationModule.forRoot()
    ],
    declarations: [ConcertsComponent, ConcertDetailsComponent, CreateConcertComponent, StatusConcertComponent, EditConcertComponent],
    providers: [ConcertsService]
})
export class ConcertsModule {
}
