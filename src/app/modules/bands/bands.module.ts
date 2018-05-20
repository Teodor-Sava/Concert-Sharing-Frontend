import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {BandsRoutingModule} from './bands-routing.module';
import {BandsComponent} from './components/bands/bands.component';
import {BandsDetailsComponent} from './components/bands-details/bands-details.component';
import {CreateBandComponent} from './components/create-band/create-band.component';
import {EditBandComponent} from './components/edit-band/edit-band.component';
import {BandConcertStatusComponent} from './components/band-concert-status/band-concert-status.component';
import {BandConcertRequestsComponent} from './components/band-concert-requests/band-concert-requests.component';
import {BandConcertHistoryComponent} from './components/band-concert-history/band-concert-history.component';
import {BandsService} from './services/bands.service';

@NgModule({
    imports: [
        CommonModule,
        BandsRoutingModule,
        InfiniteScrollModule
    ],
    declarations: [BandsComponent,
        BandsDetailsComponent,
        CreateBandComponent,
        EditBandComponent,
        BandConcertStatusComponent,
        BandConcertRequestsComponent,
        BandConcertHistoryComponent],
    providers: [
        BandsService
    ]
})
export class BandsModule {
}
