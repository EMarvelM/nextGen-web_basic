let product = {
    name: "Wireless Headphones",
    price: 99.99,
    inStock: true,
    quantity: 15,
    brand: "TechSound",
    color: "Black",
};
// code below

console.log("Product:", product['name']);
if (product['inStock']) {
    console.log("In stock: Yes");
} else {
    console.log("In stock: No");
}

console.log("Original Price: $" + product['price']);

let eligible = "No";
if (product['price'] > 50) {
    eligible = "Yes";
}
console.log("Discount Eligible:", eligible);

console.log("Discounted Price: $" + (product['price']- (product['price'] * (10/100))).toFixed(2));

shipping = "Standard Rate";
if (product['price'] > 100) {
    shipping = "Free";
}
console.log("Shipping:", shipping);