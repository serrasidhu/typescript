let magician_Names:string[]=["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"]
function make_great(magician_Names:string[]) {
    let magicians:string[]=[]
    for (const magician of magician_Names) {
        magicians.push(`The great ${magician}`)
    }
    return magicians;
}
function show_magicians(magician_Names:string[]) {
    for (const magician of magician_Names) {
        console.log(magician);
    }
}
console.log(`the original array.`);
show_magicians(magician_Names)

let magicians_Name=make_great(magician_Names)
console.log(`array with the great:`);
show_magicians(magicians_Name)
