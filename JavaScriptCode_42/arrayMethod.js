const products = [
    { name: 'laptop', price: 34, brand: 'lanavo', color: 'silver' },
    { name: 'PHOnE', price: 30, brand: 'lanavo', color: 'silver' },
    { name: ' COMPUTER', price: 32050, brand: 'lanavo', color: 'silver' },
    { name: ' watnh', price: 324400, brand: 'lanavo', color: ' black' },
    { name: ' Mango', price: 32005, brand: 'lanavo', color: 'silver' },
    { name: ' Tonmato', price: 3200453, brand: 'lanavo', color: 'silver' }
];

//map
const price = products.map(product => product.price);
console.log('tt', price);

//forEach
products.forEach(product => console.log(product.price));

//filter ja match kore sob gulai diba
const cheapPrice = products.filter(product => product.price > 100);
//console.log(cheapPrice);

const nInclude = products.filter(product => product.name.includes('n'));
console.log(nInclude);

//find ja match hoba tar first ta diba
const special = products.find(product => product.name.includes('n'));
console.log(special);






