const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", stock: 50 },
    { id: 2, name: "Smartphone", price: 800, category: "Electronics", stock: 100 },
    { id: 3, name: "Headphones", price: 150, category: "Electronics", stock: 200 },
    { id: 4, name: "Keyboard", price: 100, category: "Electronics", stock: 75 },
    { id: 5, name: "Mouse", price: 50, category: "Electronics", stock: 120 },
    { id: 6, name: "Monitor", price: 300, category: "Electronics", stock: 60 },
    { id: 7, name: "Tablet", price: 600, category: "Electronics", stock: 80 },
    { id: 8, name: "Printer", price: 200, category: "Electronics", stock: 30 },
    { id: 9, name: "Camera", price: 500, category: "Electronics", stock: 40 },
    { id: 10, name: "Speaker", price: 120, category: "Electronics", stock: 90 },
    { id: 11, name: "Backpack", price: 70, category: "Accessories", stock: 150 },
    { id: 12, name: "Water Bottle", price: 20, category: "Accessories", stock: 300 },
    { id: 13, name: "Notebook", price: 10, category: "Stationery", stock: 500 },
    { id: 14, name: "Pen", price: 5, category: "Stationery", stock: 1000 },
    { id: 15, name: "Desk Lamp", price: 45, category: "Home", stock: 80 }
];



// 1. How many products are in the "Electronics" category?
var productsCount=products.filter((p)=>p.category=="Electronics").length
// console.log(productsCount);

// 2. What is the total stock of all products?
// var totalStock=products.map((p)=>p.stock).reduce((s1,s2)=>s1+s2)
var totalStock=products.reduce((acc,p)=>acc+p.stock,0)
// console.log(totalStock);

// 3. Which product has the highest price?
var highestPrice=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(highestPrice);

// 4. List all products with a price greater than $100.
var listPro=products.filter((p)=>p.price>100)
console.log(listPro);


// 5. What is the average price of products in the "Accessories" category?
var accCategory=products.filter((p)=>p.category=="Accessories")
var accTotal=accCategory.reduce((p1,p2)=>p1.price+p2.price)
// console.log(accTotal/accCategory.length);

// 6. How many products have a stock of less than 100?
var stockLess=products.filter((p)=>p.stock<100).length
// console.log(stockLess);

// 7. Which product has the lowest stock?
var lowestStock=products.reduce((p1,p2)=>p1.stock<p2.stock?p1:p2)
// console.log(lowestStock);

// 8. What is the total value of all products in stock (price * stock)?
var priceStock=products.map((p)=>p.price*p.stock).reduce((p1,p2)=>p1+p2)
console.log(priceStock);

// 9. List all products in the "Stationery" category.
var list=products.filter((p)=>p.category=="Stationery")
// console.log(list);

// 10. Which product has the ID of 10?
var pro=products.filter((p)=>p.id==10).map((n)=>n.name)
// console.log(pro);


