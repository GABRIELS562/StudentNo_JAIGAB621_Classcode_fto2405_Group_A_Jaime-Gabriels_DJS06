// A list of provinces:
const provinces = [
	"Western Cape",
	"Gauteng",
	"Northern Cape",
	"Eastern Cape",
	"KwaZulu-Natal",
	"Free State",
];

// A list of names:
const names = [
	"Ashwin",
	"Sibongile",
	"Jan-Hendrik",
	"Sifso",
	"Shailen",
	"Frikkie",
];

// A list of products with prices:
const products = [
	{ product: "banana", price: "2" },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: "8" },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
];

provinces.forEach((province) => console.log(province)); // logs each province
names.forEach((name) => console.log(name)); //logs each name

names.forEach((name, index) => {
	console.log(`${name} (${provinces[index]})`);
});

//To uppercase
const uppercasedProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercasedProvinces);

//Name Lengths
const nameLenghts = names.map((name) => name.length);
console.log(nameLenghts);

//Filtering Cape

const nonCapeProvinces = provinces.filter(
	(province) => !province.includes("Cape")
);
console.log(nonCapeProvinces.length);

//Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

//Finding S
const namesContainS = names.map(
	(name) => name.includes("S") || name.includes("s") // returns array of boolean
);
console.log(namesContainS);

const nameProvinceMapping = names.reduce((acc, name, index) => {
	acc[name] = provinces[index];
	return acc;
}, {});
console.log(nameProvinceMapping);
// This code uses the reduce function to create an object that maps each name in the names array to its corresponding province in the provinces array. The result is an object where:

// 	•	Each name is a key, and
// 	•	Each province is the value associated with that key.

// Breakdown of the reduce function:

// 	1.	names.reduce((acc, name, index) => { ... }, {});:
// 	•	names.reduce() is iterating over the names array, applying a function to each element (name), and “reducing” the array to a single output (in this case, an object).
// 	•	The first argument to reduce is a callback function (acc, name, index) => { ... }.
// 	•	The second argument {} is the initial value of the accumulator (acc), which is an empty object {}.
// 	2.	Callback parameters:
// 	•	acc (short for accumulator): This is the object that we are building up over time. It starts as an empty object {} (because of the {} after the comma).
// 	•	name: This is the current element in the names array being processed during the iteration.
// 	•	index: This is the index of the current name in the names array. We use this index to access the corresponding element in the provinces array.

//Log Products
console.log(products.forEach((product) => console.log(product.product)));

//Filter by name length
console.log(products.filter((product) => product.product.length <= 5));

//Price Manipulation
console.log(
	products
		.filter((product) => product.price && product.price.trim() !== "")
		.map((product) => ({ ...product, price: Number(product.price) }))
		.reduce((total, product) => total + product.price, 0)
);
// Goal: Remove products that don’t have valid prices (e.g., empty strings or whitespace).
// 	•	Explanation:
// 	•	product.price: This checks that the price property exists and is truthy. It ensures we skip products with null, undefined, or falsy values.
// 	•	product.price.trim() !== '': This checks that the price, if it’s a string, is not just whitespace (e.g., '  ').
// 	•	Result: After filtering, you only keep products that have valid price values.

// Goal: Convert the price from a string to a number for products that passed the filtering.
// •	Explanation:
// •	{ ...product }: This creates a copy of the product object using the spread operator, so you don’t modify the original object.
// •	price: Number(product.price): This converts the price property from a string to a number using the Number() function.
// •	Result: You get an array of product objects, but now the price is a number instead of a string.

// •	Goal: Calculate the total sum of the prices of all products.
// •	Explanation:
// •	The reduce() function iterates over the array of products, accumulating the total price.
// •	total: This is the accumulator, which starts at 0 (the second argument to reduce).
// •	product.price: For each product, we add its price to the total.
// •	Result: The final value is the total sum of all the valid product prices.

// Find extremes in prices
const pricedProducts = products
	.filter((product) => product.price && product.price.trim() !== "")
	.map((product) => ({ ...product, price: Number(product.price) }));

const highest = Math.max(...pricedProducts.map((product) => product.price));
const lowest = Math.min(...pricedProducts.map((product) => product.price));

console.log(`Highest: ${highest}. Lowest: ${lowest}`);

//Object transformation
console.log(
	products
		.filter(
			(product) =>
				product.price !== undefined && String(product.price).trim() !== ""
		)
		.map((product) => ({ ...product, price: Number(product.price) }))
		.reduce((total, product) => total + product.price, 0)
);
