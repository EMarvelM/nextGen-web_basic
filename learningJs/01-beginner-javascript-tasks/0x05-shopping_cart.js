let shoppingCart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];
//code below

let totalCartValue = 0;
let discountRate = 0;
let totalCartDiscount = 0;
let shipping = "Standard Rate";

console.log("Cart Summary:");
shoppingCart.forEach((obj) => {
    totalCartValue += obj.price * obj.quantity;
    console.log("-", obj.name + ": $" + obj.price, "x", obj.quantity, "= $" + (obj.price * obj.quantity));
})

if (totalCartValue > 1000) {
    discountRate = 10;
    shipping = "free";
} else if (totalCartValue > 500) {
    discountRate = 5;
    shipping = "Standard Rate";
} else {
    discountRate = 0;
    shipping = "Standard Rate";
}

console.log("Total Before Discount: $" + totalCartValue);
console.log("Discount Applied: " + discountRate + "%");
console.log("Final Total: $" + (totalCartValue - ((discountRate/100) * totalCartValue)));
console.log("Shipping:", shipping);