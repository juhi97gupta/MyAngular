import { Component,Input } from "@angular/core";


@Component({
    selector:"show-emp",
    templateUrl:"app.showemployee.html"
})

export class ShowEmployee{
    @Input()
    inchild:any[];
}