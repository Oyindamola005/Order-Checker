const menu = [
    {name: "Jollof Rice", price: 2000},
    {name: "Chicken", price: 4000},
    {name: "Salad", price : 1000},
];
for(let i=0; i<menubar.lenght; i++);

let quantity = prompt("How many portion" + menu[i].name + "do you want to order");
quantity =number(quantity);
let totalCost = quantity * menu[i].price;
alert("Total order placed for" + menu[i]);