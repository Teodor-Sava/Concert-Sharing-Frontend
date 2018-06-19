import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpacesComponent} from './spaces/spaces.component';
import {SpacesDetailsComponent} from './spaces-details/spaces-details.component';
import {CreateSpaceComponent} from './create-space/create-space.component';

const routes: Routes = [
    {
        path: '',
        component: SpacesComponent
    },
    {
        path: 'id/:id',
        component: SpacesDetailsComponent
    },
    {
        path: 'new',
        component: CreateSpaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpacesRoutingModule {
}
