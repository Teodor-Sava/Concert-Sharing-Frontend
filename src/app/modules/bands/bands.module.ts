import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandsRoutingModule} from './bands-routing.module';
import {BandsComponent} from './components/bands/bands.component';
import {BandsDetailsComponent} from './components/bands-details/bands-details.component';
import {CreateBandComponent} from './components/create-band/create-band.component';
import {EditBandComponent} from './components/edit-band/edit-band.component';
import {BandConcertStatusComponent} from './components/band-concert-status/band-concert-status.component';

@NgModule({
    imports: [
        CommonModule,
        BandsRoutingModule
    ],
    declarations: [BandsComponent, BandsDetailsComponent, CreateBandComponent, EditBandComponent, BandConcertStatusComponent]
})
export class BandsModule {
}
