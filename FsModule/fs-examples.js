const fs = require('fs');

// //FS readdir, returns the list of file names located in the specified directory
const files = fs.readdirSync('./content/subfolder');
console.log(files);

fs.readdir(
    './content',
    function(err, files) {
        if(err) {
            throw err;
        }
        console.log(files);
    }
);

// FS append something to the file

let content = 'some text that I want to append to the file';
let secondContent = ' this one is added as well!';

fs.appendFileSync(
    './content/second.txt', 
    content, 
    'utf8'
);

fs.appendFile(
    './content/second.txt',
    secondContent,
    'utf8',
    (err) => {
        if(err) {
            throw err
        }
    }
)

//Create and check if the directory is created

function createDir () {
    let dirName = 'test-files';

    if(fs.existsSync(dirName)) {
        console.log('The directory is arleady created');
    } else {
        fs.mkdirSync(dirName);
        console.log('The new directory is created');
    }
}
createDir();

function createDir () {
    let yourDirName = 'test-files-fs';

    if(fs.existsSync(yourDirName)) {
        console.log('The directory is arleady created');
    } else {
        fs.mkdir(yourDirName, {recursive:true}, (err, path) => {
            if(err) {
                throw err;
            } 
            console.log(path);
        });
    }
}
createDir();

//Renames the directory

fs.renameSync('test-files-fs', 'test-files-files');

//Removes files from the directory

fs.unlinkSync('origin/test-files/intro.js');

//Removes the directory (the directory should be empty)

fs.rmdirSync('./origin/test-files');