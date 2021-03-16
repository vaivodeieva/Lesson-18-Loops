// 1.
// create a loop that counts from 0 - 100 (including),
// and for every iteration is does the Fizz - bazz with the number

//     Print out "Fizz" if the number is divisible without reminder by 2
//     Print out "Bazz" if the number is divisible without reminder by 3
//     Print out "Fizz Bazz" if the number is divisible without reminder by 2 and 3
//     Print out the number if none of above apply



for(let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log('Fizz Bazz', i);
    } else if (i % 2 === 0) {
       console.log('Fizz', i);  
    } else if (i % 3 === 0) {
        console.log('Bazz', i);   
    } else {
        console.log(i);
    }

} 




// 2.
// Create a loop, that counts from 1000 -> 50, counts every 7th number
// and prints out if the number is even or odd
// 1000 is even
// 993 is odd
// 986 is even
// ...


for (let i = 1000; i >= 50; i-=7) {
    
    if (i % 2 === 0) {
        console.log(i, ' is an even number!');
    } else {
        console.log(i, ' is an odd number!');
    }
}
