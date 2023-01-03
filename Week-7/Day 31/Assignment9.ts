class Ccustomer
{
    private id:number;
    private name:string;
    private location:string;
    
    constructor(id:number=1, name:string="Scott", location:string="Hyd"){
        this.id = id;
        this.name = name;
        this.location = location;
    }

    showDetails(){
        console.log(`Customer Details:: Id: ${this.id}, Name: ${this.name}, Location: ${this.location}`);
    }
}

var c1:Ccustomer = new Ccustomer();
var c2:Ccustomer = new Ccustomer(10256);
var c3:Ccustomer = new Ccustomer(10256, "Shravan");
var c4:Ccustomer = new Ccustomer(10256, "Evin", "Mumbai");

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();