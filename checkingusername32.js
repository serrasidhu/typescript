"use strict";
let current_Users = ['Emma', 'Esra', 'Serra', 'Alice', 'Rose'];
let new_users = ['Olivia', 'Selena', 'Ozge', 'Bella', 'Emma'];
for (let current_User of new_users) {
    if (current_Users.includes(current_User.toLowerCase())) {
        console.log(`Sorry the usermame ${current_User} is already taken.Please chosse a different one.`);
    }
    else {
        console.log(`the ${current_User} username is avaible`);
    }
}
