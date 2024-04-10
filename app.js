console.log("Hello World!\n==========\n");

// Exercise 1 Section
//ignore the even numbers

for (let i = 1; i <= 100; i++) {
    if (i % 2 !==0) {
        console.log(i);
    } else {
        continue;
    }
}



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// Fizzbuzz 
// trying to show each occurence once 
// this is why we use if else

for ( let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ", i);  
        //divisible by both 3 and 5
    } else if ( i % 3 == 0)  { 
        console.log("Fizz", i);
        //divisible by 3
    } else if (i % 5 == 0) {
        console.log("Buzz", i);
        //divisible by 5
    } else 
    console.log(i);
}


// Exercise 3 Section -  print out odd numbers using do/while loop

//do {
  // code to repeat
//} while ([condition]);

 
let iterator = 1; 

while(iterator <=100)
    if (iterator % 3 == 0 && iterator % 5 == 0) {
        console.log("FIZZBUZZ", iterator);  
        //divisible by both 3 and 5
    } else if ( iterator % 3 == 0)  { 
        console.log("Fizz", iterator);
        //divisible by 3
    } else if (iterator % 5 == 0) {
        console.log("Buzz", iterator);
        //divisible by 5
    } else 
    console.log(iterator);




    iterator = 1;
    do {
        if (iterator % 3 == 0 && iterator % 5 == 0) {
        console.log("FIZZBUZZ", iterator);  
        //divisible by both 3 and 5
    } else if ( iterator % 3 == 0)  { 
        console.log("Fizz", iterator);
        //divisible by 3
    } else if (iterator % 5 == 0) {
        console.log("Buzz", iterator);
        //divisible by 5
    } else 
    console.log(iterator);

    } while (iterator <= 100)




// FIZZBUZZ -  do while loop 






// exercise 4 

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log("Value:", value);
console.log("N:", n);

// n is the upper bound (limit) of the loop
for (let i = 0; i <= n; i++){
    if (i == value) {
        console.log("Found value!");
        break;
    } else if (i == n) {
        console.log("Did not find value");
    }
}


// exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for ( let i = start; i < end; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("FIZZBUZZ", i);  
        //divisible by both 3 and 5
    } else if ( i % fizzDivisor == 0)  { 
        console.log("Fizz", i);
        //divisible by 3
    } else if (i % buzzDivisor == 0) {
        console.log("Buzz", i);
        //divisible by 5
    } else 
    console.log(i);
}

console.log("fizzDivisor", fizzDivisor);
console.log("buzzDivisor", buzzDivisor
)