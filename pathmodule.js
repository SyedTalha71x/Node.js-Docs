// path module in node js 

const path = require('node:path'); 
const a = path.basename('C:\\temp\\myfile.html');
const b  = path.win32.basename('C:\\temp\\myfile.html');
console.log(a,b);

const a3 = path.extname(__filename);
console.log(a3);