import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers-http',
  templateUrl: './customers-http.component.html',
  styleUrls: ['./customers-http.component.css']
})
export class CustomersHttpComponent {
  constructor(private httpObj:HttpClient){}

  customersArray:any[] = [];

  getData():void {
    let url :string  = "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
        // console.log(response.data);
        this.customersArray = response.data;
    });
  }

}
