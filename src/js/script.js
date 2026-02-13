const item = [
    {name: "Jollof Rice", price: 2000},
    {name: "Chicken", price: 4000},
    {name: "Salad", price : 1000},
];
let grandtotal = 0;
for(let i=0; i<item.length; i++)
{
let quantity = prompt("How many" + item[i].name + "do you want to order");
quantity =Number(quantity);
let totalCost = quantity * item[i].price;

grandtotal += totalCost;
};
alert ("grand total for your oder is #" + grandtotal);