import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent {
  principal:number  = 0;
  rate:number = 0;
  time:number = 0;
  result:number = 0;
  var:boolean =true;
  message:string = "";

  public si_calc():void{
    this.result = (this.principal * this.rate * this.time)/100;
    this.message = "Simple Interest = " + this.result;

    
  }
  
}
