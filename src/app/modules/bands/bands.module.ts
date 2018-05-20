import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandsRoutingModule} from './bands-routing.module';
import {BandsComponent} from './bands/bands.component';
import {BandsDetailsComponent} from './bands-details/bands-details.component';
import {CreateBandComponent} from './create-band/create-band.component';
import {EditBandComponent} from './edit-band/edit-band.component';
import {BandConcertStatusComponent} from './band-concert-status/band-concert-status.component';

@NgModule({
    imports: [
        CommonModule,
        BandsRoutingModule
    ],
    declarations: [BandsComponent, BandsDetailsComponent, CreateBandComponent, EditBandComponent, BandConcertStatusComponent]
})
export class BandsModule {
}
