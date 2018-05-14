import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConcertsRoutingModule} from './concerts-routing.module';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertsService} from './services/concerts.service';
import { ConcertDetailsComponent } from './components/concert-details/concert-details.component';

@NgModule({
    imports: [
        CommonModule,
        ConcertsRoutingModule
    ],
    declarations: [ConcertsComponent, ConcertDetailsComponent],
    providers: [ConcertsService]
})
export class ConcertsModule {
}
