let guestChange:string[]=["jungkook","v","jimin"]
for (let guest of guestChange) {
    console.log(`${guest} you are inviting for dinner`);
}
let guestNotCome=guestChange [1]
console.log(`${guestNotCome} can't make it the dinner.`);
guestChange [1] = 'suga' 
for (let guest of guestChange) {
    console.log(`${guest} you are inviting to dinner.`);   
}
