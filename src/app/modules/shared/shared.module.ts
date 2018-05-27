import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {SearchService} from './services/search.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [SearchComponent],
    exports: [SearchComponent],
    providers: [SearchService]
})
export class SharedModule {
}
