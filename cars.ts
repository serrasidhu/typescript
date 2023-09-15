type  Car ={
  manufacturer: string;
  model: string;
  [key: string]: string; 
}
function carA(manufacturer: string, model: string, ...options: { key: string; value: any }[]){
  let car: Car = {
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