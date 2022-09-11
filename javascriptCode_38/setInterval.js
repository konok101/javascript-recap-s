console.log('one');

// setInterval(()=>{
// console.log('third');
// },3000)

let seconds =0;
const timeId =setInterval(()=>{
  //  seconds++;
    //++ secounds = age add korba then console
    //secounds++ =  age console then add 

    console.log(seconds++);
    if(seconds>15){
        clearInterval(timeId);
    }
}, 1000)
console.log('two');