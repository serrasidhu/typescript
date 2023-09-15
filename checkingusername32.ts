let current_Users:string[]=['Emma','Esra','Serra','Alice','Rose']
let new_Users:string[]=['Olivia','Selena','Ozge','Bella','Emma']
for (let current_User of new_Users) {
    if (current_Users.includes (current_User.toLowerCase())) {
        console.log(`Sorry the usermame ${current_User} is already taken.Please chosse a different one.`);
        
    } else {
        console.log(`the ${current_User} username is avaible`);
    }
}