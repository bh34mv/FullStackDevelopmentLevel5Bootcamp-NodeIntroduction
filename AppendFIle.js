var fs = require('fs');

fs.writeFile('text.txt', Hello content!, function (err) {
    if (err) throw err;
    console.log('Saved!');
});