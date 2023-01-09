import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component {
  ename:string  = "";
  job:string  = "";
  salary:string  = "";
  deptno:number = 0;
  empno:number = 0;

  public employeeArray:any[]=  [];
  
  constructor(private httpObj:HttpClient) { }

  ngOnInit(): void { }

  getData_click():void
  {
    let url :string  = "http://localhost:3000/employees";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
       // console.log(response);
        this.employeeArray = response;
    });
  }

  addData_click():void
  {    
    let url :string  = "http://localhost:3000/employees";

    let studentObj:any =  {};
    studentObj.ename = this.ename;
    studentObj.job = this.job;
    studentObj.salary = this.salary;
    studentObj.deptno = this.deptno;


    this.httpObj.post(url, studentObj).subscribe(  (response:any)  =>  
    {
      alert("New Employee details are saved in server");
      this.getData_click();
    });
  }

  delData_click(empno:number):void{

    let url :string  = "http://localhost:3000/employees/" + empno;

    this.httpObj.delete(url).subscribe(  (response:any)  =>  
    {
      alert("Deleted successfully");
    });
    this.getData_click();
  }

}
