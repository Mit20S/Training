exports.getData = function(){
    let productArray = [
        {name:"Book", price:400, quantity:10, category:"Stationery"},
        {name:"Mobile", price:100000, quantity:4, category:"Electronics"},
        {name:"Broom", price:250, quantity:12, category:"Cleaning Supplies"},
        {name:"Pen", price:10, quantity:0, category:"Stationery"},
        {name:"Scale", price:15, quantity:0, category:"Stationery"}
    ];
    return(productArray);
}