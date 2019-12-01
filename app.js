console.log("...Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const user = os.userInfo();
const uid = user.uid;
const dir = user.homedir;
const shell = user.shell;
const ospltf = os.platform();

console.log(`...Found a user: ${user.username}`);
console.log(`...Current folder: ${dir}`);

let greeting = `\nHello ${user.username} or ${uid} ! Your app resides in ${dir} and the shell is ${shell}`;
let plat = `\nYou are using ${ospltf} platform.`;

fs.appendFile('greeting.txt', greeting + plat, function(err) {
    if (err) {
        console.log('Unable to write to file');
    }
});