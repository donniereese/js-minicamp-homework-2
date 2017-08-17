// Do not change any of the function names

function getBiggest(x, y) {
    // x and y are integers.  Return the larger integer
    // if they are the same return either one
    /**
     * Code Notes
     * conditional Ternary conditional return
     * short-hand of if-else with return conditions
     */
    return (x >= y) ? x : y;
}

function greeting(language) {
    // return a greeting for three different languages:
    // language: 'German' -> 'Guten Tag!'
    // language: 'English' -> 'Hello!'
    // language: 'Spanish' -> 'Hola!'
    // if language is undefined return 'Hello!'
    var greeting;
    switch(language) {
        case 'German':
            greeting = 'Guten Tag!';
        break;
        case 'Spanish':
            greeting = 'Hola!';
        break;
        case 'English':
        default:
            greeting = 'Hello!';
    }

    return greeting;
}

function isTenOrFive(num) {
    // return true if num is 10 or 5
    // otherwise return false
    /**
     * Code Notes
     * Long-hand if-else use
     * either one or other condition is met
     * or return false otherwise
     */
    if( num === 10 || num === 5 ) {
        return true;
    } else {
        return false;
    }

}

function isInRange(num) {
    // return true if num is less than 50 and greater than 20
    return ( num < 50 && num > 20 ) ? true : false;
}

function isInteger(num) {
    // return true if num is an integer
    // 0.8 -> false
    // 1 -> true
    // -10 -> true
    // otherwise return false
    // hint: you can solve this using Math.floor
    return num === Math.floor(num);
}

function fizzBuzz(num) {
    // if num is divisible by 3 return 'fizz'
    // if num is divisible by 5 return 'buzz'
    // if num is divisible by 3 & 5 return 'fizzbuzz'
    // otherwise return num
    return ( num % 3 === 0 && num % 5 === 0 ) ? 'fizzbuzz' : ( num % 3 === 0 ) ? 'fizz' : ( num % 5 === 0 ) ? 'buzz' : num;
}

function isPrime(num) {
    // return true if num is prime.
    // otherwise return false
    // hint: a prime number is only evenly divisible by itself and 1
    // hint2: you can solve this using a for loop
    // note: 0 and 1 are NOT considered prime numbers
    for(var i = 0; i <= num; i++) {
        if( num < 2 ) {
            return false;
        } else if(i >= 2) {
            if( (num % i === 0 || num  % i === num) && i != num )
                return false;
        }
    }
    return num > 1;
}

function returnFirst(arr) {
    // return the first item from the array
    return arr[0];
}

function returnLast(arr) {
    // return the last item of the array
    return arr[arr.length - 1];
}

function getArrayLength(arr) {
    // return the length of the array
    return arr.length;
}

function incrementByOne(arr) {
    // arr is an array of integers
    // increase each integer by one
    // return the array

    var newArr = arr.map(function(num){
        return num + 1;
    });

    return newArr;
}

function addItemToArray(arr, item) {
    // add the item to the end of the array
    // return the array
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
    // add the item to the front of the array
    // return the array
    // hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
    // words is an array of strings
    // return a string that is all of the words concatenated together
    // spaces need to be between each word
    // example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
    // check to see if item is inside of arr
    // return true if it is, otherwise return false

    // Using Array method...
    return arr.includes(item);

    /* or
    *   for( var i = 0; i < arr.length - 1; i++ ) {
    *       if(arr[i] === item)
    *           return true;
    *   }
    *
    *   return false;
    */
}

function addNumbers(numbers) {
    // numbers is an array of integers.
    // add all of the integers and return the value
    return numbers.reduce(function(a, b) {
        return a + b;
    }, 0);
}

function averageTestScore(testScores) {
    // testScores is an array.  Iterate over testScores and compute the average.
    // return the average
    return testScores.reduce(function(sum, next, index, arr){
        sum = ( arr.length - 1 === index ) ? (sum + next) / arr.length : sum + next;
        return sum;
    }, 0);
}

function largestNumber(numbers) {
    // numbers is an array of integers
    // return the largest integer
    var largest = 0;
    for(var i = 0; i < numbers.length - 1; i++) {
        largest = ( numbers[i] >= largest ) ? numbers[i] : largest;
    }
    return largest;

    // or using reduce...
    // return numbers.reduce(function(val, next){
    //     return ( next >= val ) ? next : val;
    // }, 0);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
    getBiggest: getBiggest,
    greeting: greeting,
    isTenOrFive: isTenOrFive,
    isInRange: isInRange,
    isInteger: isInteger,
    fizzBuzz: fizzBuzz,
    isPrime: isPrime,
    returnFirst: returnFirst,
    returnLast: returnLast,
    getArrayLength: getArrayLength,
    incrementByOne: incrementByOne,
    addItemToArray: addItemToArray,
    addItemToFront: addItemToFront,
    wordsToSentence: wordsToSentence,
    contains: contains,
    addNumbers: addNumbers,
    averageTestScore: averageTestScore,
    largestNumber: largestNumber
};
