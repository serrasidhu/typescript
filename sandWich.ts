function make_Sandwich(items:string[]):void { 
    console.log(`You order a sandwich with following items:`);
    for (let item of items) {
        console.log(`${item}`);
    }
}
make_Sandwich(["cheese", "ham", "lettuce"]);
make_Sandwich(["peanut butter", "jam"]);
make_Sandwich(["turkey", "bacon", "tomato", "mayo"]);


  