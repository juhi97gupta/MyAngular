import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployee} from './app.addemployee';
import { ShowEmployee} from './app.showemployee'
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent, AddEmployee, ShowEmployee
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }