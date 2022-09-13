//array destructing
const number = [21, 22];
//array distructing
const [x, y] = [44, 33];
console.log(x, y);

//function destrucing

function boxify(a, b) {
    const ac = [a, b];
    return ac;
}
const [e, r] = boxify(30, 40);
console.log(boxify(e,r));

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
 
console.log( lan);