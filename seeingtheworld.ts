let places:string[]=['Canada','Netherlands','Switzerland' ,'Italy','Azerbaijan','Latvia','Montenegro'];
console.log(places);

console.log("alphabetical order",[... places].sort());
console.log("original array",places);

console.log("reverse alphabetical order",[...places].sort().reverse());
console.log("still in original order",places);

places.reverse()
console.log("reverse",places);

places.reverse()
console.log("reverse again",places);

places.sort()
console.log("sort array",places);

places.sort().reverse()
console.log("order change",places);









