//truthe value
//'sdds', 44, true, {},[]

//falsee value
// '',0,false,null, undefine

const money =1300;
let food;
if(money>100){
 food='brani';
}
else{
    food='tea';
}

//ternary
let food1=money>100 ? 'brani':'tea';
console.log( food1)

const isActive= true;

const showUser=() =>console.log( ' show');
const hideUser= ()=>console.log( ' hide');

isActive ? showUser() : hideUser();

isActive && showUser();