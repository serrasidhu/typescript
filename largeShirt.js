"use strict";
function make_Shirt(size = "large", message = "I love Typescript") {
    console.log(`You should ordred a ${size} size T-shirt ,with message:${message}`);
}
make_Shirt();
make_Shirt("medium");
make_Shirt("small", "I am learning typescript");
