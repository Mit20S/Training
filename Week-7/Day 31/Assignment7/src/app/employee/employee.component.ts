import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    empno: number = 10256;
    ename:string = "Liam";
    job:string = "Manager";
    salary:number = 45000;
    deptno:number = 12;
}
