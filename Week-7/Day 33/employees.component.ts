import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  empArray:any[] = [
    {empno:1, empname:"Evin", performance:1, salary: 500},
    {empno:2, empname:"Mitalee", performance:2, salary: 499},
    {empno:3, empname:"Shravan", performance:2, salary: 499},
    {empno:4, empname:"Ankeet", performance:3, salary: 400},
    {empno:5, empname:"Nsd", performance:4, salary: 100},
    {empno:6, empname:"Aayushi", performance:4, salary: 100}
  ]

}
