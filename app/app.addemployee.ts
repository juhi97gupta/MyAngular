import { Component } from "@angular/core";
import { empty } from "rxjs";

@Component({
    selector:"add-emp",
    templateUrl:"addemployee.html"
})


export class AddEmployee{
    empid:number;
    ename:string;
    esalary:number;
    status:boolean=false;

 empall:any[]=[];

 addEmployee():any{
     this.status=true;
     this.empall.push({empid:this.empid, ename:this.ename, esalary:this.esalary});
 }
}