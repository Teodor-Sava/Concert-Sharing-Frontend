import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConcertHistoryComponent} from './concert-history/concert-history.component';
import {ConcertUpcomingComponent} from './concert-upcoming/concert-upcoming.component';
import {ConcertAllComponent} from './concert-all/concert-all.component';
import {DashboardService} from './services/dashboard.service';
import { FavoriteBandsComponent } from './favorite-bands/favorite-bands.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent, ConcertHistoryComponent, ConcertUpcomingComponent, ConcertAllComponent, FavoriteBandsComponent],
    providers: [DashboardService]
})
export class DashboardModule {
}
