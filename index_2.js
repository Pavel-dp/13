    // adding data in file
    
const fs = require('fs'); 
let addedData = 'addedNewData';
let dataFile = 'data.txt';
 
fs.appendFile(dataFile, ('\n' + addedData), function(error){
    if(error) throw error; 
    console.log("File writing completed. File contents:\n");
    console.log(fs.readFileSync(dataFile, "utf8"));  // output the read data
});
