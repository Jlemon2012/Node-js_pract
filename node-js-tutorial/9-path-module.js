const path = require('path');

console.log(path.sep); // platform specific separator

const filePath = path.join('/content', 'subfolder', 'test.txt'); // returns the full path to the file
console.log(filePath);

const base = path.basename(filePath); // returns the base path to the file 
// and will show in the form of only the file name with the access to open it
console.log(base);

const absolute = path.resolve('content', 'subfolder', 'test.txt'); // returns the absolute path to file
console.log(absolute);