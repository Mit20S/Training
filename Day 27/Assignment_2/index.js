const productModule = require("./products");

const products = productModule.getData();

// Returning all Products from the ProductArray
function displayProducts(){
    return products;
};

// Return Products having same Category
function sameCategory(category){
    return products.filter(function(item){
        if(item.category == category){
            return item;
        }
    });
};

//Return Products having price between a range
function range(a,b){
    return products.filter(function(item){
        if(item.price >= a && item.price <= b){
            return item;
        }
    });
};

//Returning Products that are out of Stock
function stockOut(){
    return products.filter((item)=> item.quantity == 0 ? item : null);
};

//Returning Products that are out of Stock
function stockIn(){
    return products.filter((item)=> item.quantity != 0 ? item : null);
};

console.log(displayProducts());
console.log(sameCategory("Stationery"));
console.log(sameCategory("Electronics"));
console.log(range(400,100000));
console.log(stockOut());
console.log(stockIn());

