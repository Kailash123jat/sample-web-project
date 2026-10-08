const fs = require("fs");

function testFileExists(file) {
    if (!fs.existsSync(file)) {
        throw new Error(`${file} does not exist`);
    }
}

testFileExists("index.html");
testFileExists("style.css");
testFileExists("script.js");

console.log("All required files exist.");
console.log("Tests passed successfully!");