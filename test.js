const transactions = [
  {
    type: "sale",
    paymentMethod: "cash",
    customer: "Isaac Asimov",
    items: [{ name: "Byte", price: 1.0 }, { name: "Bit", price: 0.125 }]
  },
  {
    type: "sale",
    paymentMethod: "credit",
    customer: "CJ Cherryh",
    items: [
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 }
    ]
  },
  {
    type: "purchase",
    paymentMethod: "credit",
    vendor: "Dick's Doodads",
    items: [
      { name: "XL Doodad", price: -3.0 },
      { name: "XS Doodad", price: -0.5 },
      { name: "XS Doodad", price: -0.5 }
    ]
  },
  {
    type: "purchase",
    paymentMethod: "cash",
    vendor: "Gibson Gadgets",
    items: [
      { name: "Basic Gadget", price: -2.0 },
      { name: "Advanced Gadget", price: -3.5 }
    ]
  },
  {
    type: "sale",
    paymentMethod: "credit",
    customer: "Frederik Pohl",
    items: [
      { name: "Byte", price: 1.0 },
      { name: "Byte", price: 1.0 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 }
    ]
  },
  {
    type: "purchase",
    paymentMethod: "cash",
    vendor: "Clarke Computing",
    items: [
      { name: "Floppy Disk", price: -0.1 },
      { name: "Floppy Disk", price: -0.1 },
      { name: "Floppy Disk", price: -0.1 },
      { name: "Floppy Disk", price: -0.1 },
      { name: "Floppy Disk", price: -0.1 },
      { name: "Floppy Disk", price: -0.1 },
      { name: "Floppy Disk", price: -0.1 }
    ]
  },
  {
    type: "sale",
    paymentMethod: "credit",
    customer: "Neal Stephenson",
    items: [{ name: "kilobyte", price: 1024.0 }]
  },
  {
    type: "purchase",
    paymentMethod: "credit",
    vendor: "Gibson Gadgets",
    items: [
      { name: "Advanced Gadget", price: -3.5 },
      { name: "Advanced Gadget", price: -3.5 },
      { name: "Advanced Gadget", price: -3.5 },
      { name: "Advanced Gadget", price: -3.5 }
    ]
  },
  {
    type: "purchase",
    paymentMethod: "credit",
    vendor: "Dick's Doodads",
    items: [
      { name: "XL Doodad", price: -3.0 },
      { name: "XL Doodad", price: -3.0 },
      { name: "XL Doodad", price: -3.0 }
    ]
  },
  {
    type: "sale",
    paymentMethod: "cash",
    customer: "Isaac Asimov",
    items: [
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 },
      { name: "Bit", price: 0.125 }
    ]
  }
];

// const totalTransactions = transactions.length;

// console.log( 'The total number of transactions is:', totalTransactions );

// const numSales =

// function() {
//     count = 0
//     for (i=0; i < transactions.length; i++ ){
//     if (transactions[i].type == "sale"){
//         count += 1
//     }
//     return count
// }
// }
// (transactions)

// console.log( 'The total number of sales is:', numSales);

// Answer#1
const numSales = [];

transactions.forEach(function(transaction) {
  if (transaction['type'] == 'sale') {
    numSales.push(transaction);
  }
})

// console.log( 'The total number of sales is:', numSales.length );

// Answer#2

// Calculate the total number of 'purchases'.

const numPurchases = [];

transactions.forEach(function(transaction) {
  if (transaction['type'] == 'purchase') {
    numPurchases.push(transaction);
  }
})

// console.log( 'The total number of purchases is:', numPurchases.length );

// Calculate the total number of 'cash' 'sales'.

// HINT(S):
// - Don't forget that 'purchases' can also be made in 'cash'!
// */

// const numCashSales = [];

// transactions.forEach(function(transaction) {
//   if (transaction.type == 'sale' && transaction.paymentMethod == 'cash') {
//     numCashSales.push(transaction);
//   }
// })

// console.log( 'The total number of cash sales is:', numCashSales.length );

// Calculate the total number of 'credit' 'purchases'.

// HINT(S):
// - Make sure to exclude any 'sales' made by 'credit'!

// const numCreditPurchases =[];

// transactions.forEach(function(transaction) {
//   if (transaction.type == 'purchase' && transaction.paymentMethod == 'credit') {
//     numCreditPurchases.push(transaction);
//   }
// })

// console.log( 'The total number of credit purchases is:', numCreditPurchases.length );

/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
// const allVendors = [];

// transactions.forEach(function(transaction) {
//   if (transaction.vendor) {
//     allVendors.push(transaction.vendor);
//   }
// })

// console.log( 'The vendors are:', allVendors );

// Create an array that includes all of the *unique* customers which appear in the transactions data set.
// eg. `[ 'customer one', 'customer two', ... ]

// HINT(S):
// - Not all transactions have a 'customer'!
// - The assembled array should be made up of strings, not full `transaction` objects.
// - Make sure that the resulting array *does not* include any duplicates.
// */

// const uniqueCustomers = [];

// transactions.forEach(function(transaction) {
//     if (transaction.customer) {
//         uniqueCustomers.push(transaction.customer);
//     }
//   })

// console.log( 'The unique customers are:', new Set(uniqueCustomers) );

// Create an array of information about the 'sale' transactions which include 5 or more items.

// The array should resemble the following:
// [ { name: 'Customer Name', numItems: 5 }, ... ]

// HINT(S):
// - There may be more than 1 'sale' that includes 5 or more items.
// - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
// */

// const bigSpenders =[];
// const obj = {};

// transactions.forEach(function(transaction) {
//     if (transaction.type == 'sale' && transaction.items.length >= 5) {
//         bigSpenders.push({'name': transaction.customer, 'numItems': transaction.items.length});
//     }
//   })

//   console.log( 'The "big spenders" are:', bigSpenders );

// Calculate the sum of the *first* 'sale' transaction.

// HINT(S):
// - Transactions don't have 'prices', but their 'items' do!
// */
// initialValue = 0
// const sumFirstSale =
//   transactions[0].items.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.price;
// },initialValue)

// console.log( 'The sum of the first sale items is:', sumFirstSale );

// Calculate the sum of *all* 'purchase' transactions.

// HINT(S):
// - Your solution to 'QUESTION 08' is a good starting point!
// - Make sure to include 'price' information from *all* purchases.
// */


let sumPurchases; 
let prices =[];

numPurchases.forEach(function(transaction) {
    transaction.items.forEach(function(item){
    prices.push(item.price);
    sumPurchases = prices.reduce(function(a, b) { return a + b });
    })
  })

// console.log("The sum of all purchases is:", sumPurchases);


// Calculate the company's net profit.

// This number will be positive if the sum of the sales is greater than the amount spent on purchases.

// Otherwise, this number will be negative.

// HINT(S):
// - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
// */


// const netProfit;
// console.log( 'The net profit is:', netProfit );

let sumSales; 
let salePrices =[];

numSales.forEach(function(transaction) {
    transaction.items.forEach(function(item){
    salePrices.push(item.price);
    sumSales = salePrices.reduce(function(a, b) { return a + b });
    })
  })

const netProfit = sumSales + sumPurchases


// var netProfit;
// var prices = [];

// transactions.forEach(function(transaction) {
//   transaction['items'].forEach(function(item) {
//     prices.push(item['price']);
//     netProfit = prices.reduce(function(a, b) { return a + b });
//   })
// })
// console.log( 'The net profit is:', netProfit );

// Calculate the most items sold as part of single transaction.

// HINTS:
// - The result of this calculation should be a number (not an array, object, or other data type).
// */

// const mostItems = salePrices.reduce(function(a,b){
//     return Math.max(a,b);
// });


// var numItems = [];
// var mostItems;

// numSales.forEach(function(saleTransaction) {
//   numItems.push(saleTransaction['items'].length);
//   numItems.sort();
//   mostItems = numItems[numItems.length - 1];
// })

// console.log( 'The most items sold in a single transaction is:', mostItems );

// Calculate the sum of the 'purchase' with the fewest items.
// */


var smallestTransaction = numPurchases[0];

numPurchases.forEach(transaction => {
  if (transaction.items.length < smallestTransaction.items.length) {
    smallestTransaction = transaction;
  }
})

var sumOfSmallestPurchase = smallestTransaction.items.reduce((total, item) => total += item.price, 0)

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );






