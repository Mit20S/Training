import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  id:number = 0;
  name:string = "";
  price:number = 0;
  catg:string = "";
  quant:number = 0;

  prodArray : any[] = [];

  addButton_click():void{
    let prodObj : any = {};
    prodObj.id = this.id;
    prodObj.name = this.name;
    prodObj.price = this.price;
    prodObj.catg = this.catg;
    prodObj.quant = this.quant;

    this.prodArray.push(prodObj);
  }
  
  resetButton_click():void{
    this.id = 0;
    this.name = "";
    this.catg = "";
    this.price = 0;
    this.quant = 0;

  }

  updateButton_click(){
    let index:number  = this.prodArray.findIndex( item => item.id == this.id );
    this.prodArray[index].name = this.name;
    this.prodArray[index].price = this.price;
    this.prodArray[index].catg = this.catg;
    this.prodArray[index].quant = this.quant;
  }

  deleteButton_click(id:number){
    let index:number  = this.prodArray.findIndex( item => item.id == id );
    this.prodArray.splice(index,1); 
  }

  newupdateButton_click(id:number){
    let index:number  = this.prodArray.findIndex( item => item.id == id );
    this.id = this.prodArray[index].id;
    this.name = this.prodArray[index].name;
    this.catg = this.prodArray[index].catg;
    this.price = this.prodArray[index].price;
    this.quant = this.prodArray[index].quant;
  }

  getButton_click(){
    let index:number  = this.prodArray.findIndex( item => item.id == this.id );
    this.name = this.prodArray[index].name;
    this.price = this.prodArray[index].price;
    this.catg = this.prodArray[index].catg;
    this.quant = this.prodArray[index].quant;
  }
}
