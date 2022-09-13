const employs={
    id: 'vs code',
    language: ['ss','js','ee','we'],
    specifiction: {
        name:'wwww',
        watch:{
            color:'black',
            code:{
                lan:'sd'
            }
        }
    }

    
}

const {language, lan}=employs?.specifiction?.watch?.code;
const studentObj=JSON.stringify(employs);
console.log(studentObj)
const converJsonTOAA= JSON.parse(studentObj);
console.log(converJsonTOAA);

const products = [
    { name: 'laptop', price: 34, brand: 'lanavo', color: 'silrver' },
    { name: ' COMPUTER', price: 32050, brand: 'avo', color: 'silever' },
    { name: ' watnh', price: 324400, brand: 'lanatwvo', color: ' black' },
    { name: ' Mango', price: 32005, brand: 'laqsavo', color: 'silwqver' },
    { name: 'PHOnE', price: 30, brand: 'lawqnavo', color: 'silqver' },
    { name: 'nato', price: 32453, brand: 'lavo', color: 'sielver' }
];

//Add
const newProduct=     { name: ' watnh', price: 324400, brand: 'lanavo', color: ' black' };

const newProducts=[...products, newProduct];
console.log(newProducts);

//Remove
const remaining=products.filter(nP=>nP.name !=='PHOnE');
console.log(remaining);

