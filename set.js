//set is a new data strcuture provided by ES6:
//all its members are unique without duplicate


const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

//we can create a set by passing in an array;
const set = new Set([1, 2, 3, 4, 4]);


//a new way to remove duplicates in a array:

[...new Set(array)];

// or a new way to get rid of duplicate characters:

[...new Set('ababbc')].join('')


// When something is added into set, there's no type coersion,
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}


//When added two objects, they are different;
set.add({});
set.size // 1

set.add({});
set.size // 2



//here's some attributes and methods:
s.add(1).add(2).add(2);
// number 2 is added twice;

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false



let set = new Set([1,2,3,4,5,6,7,8]);

set = new Set([...set].filter(item=>item%2==0));

