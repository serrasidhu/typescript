"use strict";
let guest_Change = ["jungkook", "v", "jimin"];
for (let guest of guest_Change) {
    console.log(`${guest} you are inviting to the dinner.`);
}
let guests1 = guest_Change[1];
console.log(`${guests1} can not come for the dinner`);
guest_Change[1] = 'suga';
for (let guest of guest_Change) {
    console.log(` So , ${guest} I would like to invite you to the dinner.`);
}
console.log(`I found a bigger dinner table so, I can invited more guest.`);
guest_Change.unshift('jin');
guest_Change.splice(2, 0, 'jhope');
guest_Change.push('rm');
for (let guest of guest_Change) {
    console.log(`${guest} you are invited to the dinner `);
}
