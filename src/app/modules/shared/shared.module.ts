import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {SearchService} from './services/search.service';
import {ReactiveFormsModule} from '@angular/forms';
import {DisplayFieldErrorsComponent} from './components/display-field-errors/display-field-errors.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [SearchComponent, DisplayFieldErrorsComponent],
    exports: [SearchComponent, DisplayFieldErrorsComponent],
    providers: [SearchService]
})
export class SharedModule {
}
