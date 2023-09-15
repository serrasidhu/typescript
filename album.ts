type album={
    artist:string
    albumTitle:string
    tracks?:number
}
function make_Album(artist:string,albumTitle:string,tracks?:number) {
    let object:album={ 
       artist,   
       albumTitle,
    }
    
         if (tracks !== undefined) {
        object.tracks = tracks;
        }
    return object
}
let album1 = make_Album("Jass Manak", "Love Thunder");
let album2 = make_Album(" Selena Gomez", "A year without you", 11)
let album3 = make_Album("Justin Bieber", "My World");

console.log(album1);
console.log(album2);
console.log(album3);
