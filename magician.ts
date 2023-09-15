function show_Magicians1(magicianName:string[]):void {
  for (let magician of magicianName) {
    console.log(` ${magician}`);
  }
}
show_Magicians1(["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"])