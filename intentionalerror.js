"use strict";
let num = [4, 5, 7];
console.log(num[3]);
if (num.length > 3) {
    console.log(num[3]); //error
}
else if (num.length < 2) {
    console.log(num[2]); //no error
}
else {
    console.log(num[2]); //no error
}
