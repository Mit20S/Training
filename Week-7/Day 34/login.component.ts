import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  uid:string  = "";
  pwd:string = "";
  result:string  = "";
  textColor:string = "";
  count:number = 0;
  isLoginButtonDisabled:boolean = false;

  public loginButton_click():void
  {
      if(this.uid == "admin" && this.pwd == "admin123")
      {
        this.textColor = "green";
         this.result = "Welcome to Admin";
      }
      else
      {
        this.textColor = "red";
        this.result = "Invalid user id or password";
        this.count++;
        
        if(this.count == 3)
        {
          alert("You have reched maximum chances of wrong password");
          this.isLoginButtonDisabled = true;
        }
      }
  }
}
