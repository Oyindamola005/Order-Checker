const item = [
    {name: "Jollof Rice", price: 2000},
    {name: "Chicken", price: 4000},
    {name: "Salad", price : 1000},
];
for(let i=0; i<item.lenght; i++)
{
let quantity = prompt("How many" + item[i].name + "do you want to order");
quantity =Number(quantity);
let totalCost = quantity * item[i].price;
alert("Total order for" + item[i].name + "is #" + totalCost);
};