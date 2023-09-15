"use strict";
let guest_Change1 = ["jungkook", "v", "jimin"];
for (let guest of guest_Change1) {
    console.log(`${guest} you are inviting to the dinner.`);
}
let guests2 = guest_Change1[1];
console.log(`${guests2} can not come for the dinner`);
guest_Change1[1] = 'suga';
for (let guest of guest_Change1) {
    console.log(` So , ${guest} I would like to invite you to the dinner.`);
}
console.log(`I found a bigger dinner table so, I can invited more guest.`);
guest_Change1.unshift('jin');
guest_Change1.splice(2, 0, 'jhope');
guest_Change1.push('rm');
for (let guest of guest_Change1) {
    console.log(`${guest} you are invited to the dinner `);
}
while (guest_Change1.length > 2) {
    let removeGuest = guest_Change1.pop();
    console.log(`${removeGuest} sorry you are not invite to the dinner. `);
}
for (let guest of guest_Change1) {
    console.log(`${guest} you are still invite to the dinner.`);
}
guest_Change1.pop();
guest_Change1.pop();
console.log(`Guest list: ${guest_Change1} `);
