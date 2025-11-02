
/*
const set = new Set();

set.add("Mango");
set.add("Banana");
set.add("Apple");
set.add("apple");
console.log(set)
console.log(set.size);

*/

/****************************************** */
const shanta={userName: "Shanta"};
const sabbir={userName: "Mizan"};
const tanvir={userName: "Tanvir"};

const set=new Set();

set.add(shanta);
set.add(sabbir);
set.add(tanvir);
set.add(tanvir);

console.log(set);


/**********duplicate item REMOVE */

const arr =["apple", "mango", "banana"];

const set2 =new Set(arr);
set2.push("tomato");
console.log(set2);