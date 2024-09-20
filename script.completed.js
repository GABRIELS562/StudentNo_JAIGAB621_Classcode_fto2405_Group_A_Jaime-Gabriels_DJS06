// List of provinces and names
const provinces = [
	"Western Cape",
	"Gauteng",
	"Northern Cape",
	"Eastern Cape",
	"KwaZulu-Natal",
	"Free State",
];
const names = [
	"Ashwin",
	"Sibongile",
	"Jan-Hendrik",
	"Sifso",
	"Shailen",
	"Frikkie",
];

// List of products with prices
const products = [
	{ product: "banana", price: "2" },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: "8" },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
];

// 1. ForEach Basics
// Log each province and each name
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

// Log each name with its matching province in the format "Name (Province)"
names.forEach((name, index) => {
	console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation
// Create a new array of province names in uppercase using map
const uppercasedProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercasedProvinces);

// 3. Name Lengths
// Create an array containing the length of each name
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. Sorting
// Sort the provinces alphabetically
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
// Remove provinces that contain "Cape" and log the count of remaining provinces
const nonCapeProvinces = provinces.filter(
	(province) => !province.includes("Cape")
);
console.log(nonCapeProvinces.length);

// 6. Finding 'S'
// Create a boolean array indicating if a name contains the letter 'S'
const namesContainS = names.map(
	(name) => name.includes("S") || name.includes("s")
);
console.log(namesContainS);

// 7. Creating Object Mapping
// Use reduce to create an object that maps names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
	acc[name] = provinces[index];
	return acc;
}, {});
console.log(nameProvinceMapping);

// 8. Advanced Exercises (Single console.log Execution)
// Log Products: Iterate over the products array, logging each product name
console.log(products.forEach((product) => console.log(product.product)));

// 9. Filter by Name Length: Filter out products with names longer than 5 characters
console.log(products.filter((product) => product.product.length <= 5));

// 10. Price Manipulation
// Filter out products without prices, convert string prices to numbers, and calculate the total price
console.log(
	products
		.filter((product) => product.price && product.price.trim() !== "") // Filter valid prices
		.map((product) => ({ ...product, price: Number(product.price) })) // Convert prices to numbers
		.reduce((total, product) => total + product.price, 0) // Sum the prices
);

// 11. Concatenate Product Names
// Use reduce to concatenate all product names into a single string
console.log(products.reduce((acc, product) => acc + product.product, ""));

// 12. Find Extremes in Prices
// Identify the highest and lowest-priced items and format the output
const pricedProducts = products
	.filter((product) => product.price && product.price.trim() !== "") // Filter valid prices
	.map((product) => ({ ...product, price: Number(product.price) })); // Convert prices to numbers

const highest = Math.max(...pricedProducts.map((product) => product.price));
const lowest = Math.min(...pricedProducts.map((product) => product.price));

console.log(`Highest: ${highest}. Lowest: ${lowest}`);

// 13. Object Transformation
// Recreate the products object with keys 'name' and 'cost' using Object.entries and reduce
console.log(
	products.reduce((acc, { product, price }) => {
		acc.push({ name: product, cost: price });
		return acc;
	}, [])
);
