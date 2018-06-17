import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConcertHistoryComponent} from './concert-history/concert-history.component';
import {ConcertUpcomingComponent} from './concert-upcoming/concert-upcoming.component';
import {ConcertAllComponent} from './concert-all/concert-all.component';
import {FavoriteBandsComponent} from './favorite-bands/favorite-bands.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'concert-history',
                component: ConcertHistoryComponent
            },
            {
                path: 'concert-upcoming',
                component: ConcertUpcomingComponent
            },
            {
                path: 'favorite-bands',
                component: FavoriteBandsComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
