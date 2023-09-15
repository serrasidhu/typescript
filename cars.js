"use strict";
function carA(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model,
    };
    for (let option of options) {
        car[option.key] = option.value;
    }
    return car;
}
let carObj = carA("Land Rover", "Range Rover SUV", { key: "color", value: "White" }, { key: "year", value: 2023 });
console.log(carObj);
