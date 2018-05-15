import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertDetailsComponent} from './components/concert-details/concert-details.component';
import {CreateConcertComponent} from './components/create-concert/create-concert.component';
import {EditConcertComponent} from './components/edit-concert/edit-concert.component';
import {StatusConcertComponent} from './components/status-concert/status-concert.component';

const routes: Routes = [
    {
        path: '',
        component: ConcertsComponent
    },
    {
        path: 'id/:id',
        component: ConcertDetailsComponent
    },
    {
        path: 'new',
        component: CreateConcertComponent
    },
    {
        path: 'edit/id/:id',
        component: EditConcertComponent
    },
    {
        path: 'status/id/:id',
        component: StatusConcertComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConcertsRoutingModule {
}
