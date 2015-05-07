var counter = 0;

function increment() {
    console.log(++counter);
}

function decrement() {
    console.log(--counter)
}

increment();
increment();
decrement();
decrement();
increment();


function makeCounter(n) {
    var value = n;
    var increment = function (){
        return ++value;
    };

    var decrement = function (){
        return --value;
    };
    return [increment, decrement];
}

// create a counter that starts with 5
var counter = makeCounter(5);
var counter1_inc = counter[0];
var counter1_dec = counter[1];

// create a second counter that starts with 10
var counter2 = makeCounter(10);
var counter2_inc = counter2[0];
var counter2_dec = counter2[1];


console.log(counter1_inc()); // => 6
console.log(counter2_inc()); // => 11
console.log(counter1_inc()); // => 7
console.log(counter2_dec()); // => 10
console.log(counter1_dec()); // => 6
