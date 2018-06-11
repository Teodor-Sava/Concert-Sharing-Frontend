import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {MySpacesComponent} from './my-spaces/my-spaces.component';
import {MyConcertsComponent} from './my-concerts/my-concerts.component';
import {MyBandsComponent} from './my-bands/my-bands.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'spaces',
        component: MySpacesComponent
    },
    {
        path: 'concerts',
        component: MyConcertsComponent
    },
    {
        path: 'bands',
        component: MyBandsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
