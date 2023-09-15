"use strict";
function make_sandwich(items) {
    console.log(`You order a sandwich with following items:`);
    for (let item of items) {
        console.log(`${item}`);
    }
}
make_sandwich(["cheese", "ham", "lettuce"]);
make_sandwich(["peanut butter", "jam"]);
make_sandwich(["turkey", "bacon", "tomato", "mayo"]);
