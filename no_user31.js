"use strict";
//  Add an if test to Exercise 28 to make sure the list of users is not empty. If the list is empty, print the 
//message We need to find some users!Remove all of the usernames from your array,and make sure the correct messageis printed
let age_Num1 = 20;
let users = ["User1", "User2", "User3"];
if (users.length === 0) {
    console.log('We need to find some users!');
}
else if (age_Num1 < 2) {
    console.log('the preson is baby');
}
else if (age_Num1 == 2 && age_Num1 < 4) {
    console.log('the person is  toddle');
}
else if (age_Num1 == 4 && age_Num1 < 13) {
    console.log('the person is kid');
}
else if (age_Num1 == 13 && age_Num1 < 20) {
    console.log('the person is a teenage');
}
else if (age_Num1 == 20 && age_Num1 < 65) {
    console.log('the person is adult');
}
else if (age_Num1 == 65 && age_Num1 < 65) {
    console.log('the person is an elder');
}
else {
    console.log('The list is empty');
}
