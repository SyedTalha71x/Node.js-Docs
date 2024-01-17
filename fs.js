// file system in node js 

const fs = require('node:fs');

// fs.readFile('html.txt', 'utf-8', (err, data)=>{
//     console.log(data, err);

// })

// const a  = fs.readFileSync('html.txt');
// console.log(a.toString());

fs.writeFile('html.txt', "utf-8", () => {
    console.log("return to the file");
})

console.log("finished writing ");


