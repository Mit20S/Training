const { default: jsConvert } = require('js-convert-case');
const { v4: uuidv4 } = require('uuid');
var usersArray = [
    {uname :  "steve jobs", email :  "STevE@gmail.com",  cardId  :  ""},
    {uname :  "steve jobs2", email :  "STevE@gmail.com",  cardId  :  ""},
    {uname :  "steve jobs3", email :  "STevE@gmail.com",  cardId  :  ""},
    {uname :  "steve jobs4", email :  "STevE@gmail.com",  cardId  :  ""}
];

// APPLYING THE FUNCTIONS
for (var i of usersArray){
    i.cardId = uuidv4();
    i.uname = jsConvert.toHeaderCase(i.uname);
    i.email = jsConvert.toLowerCase(i.email);
    i.cardId = jsConvert.toUpperCase(i.cardId);
}

// console.log(usersArray);

// PRINTING IN CONSOLE

for (var i of usersArray)
{
    console.log(`User Id = ${i.uname}, Email = ${i.email}, cardId = ${i.cardId}`);
}