    // adding data in file
    
const fs = require('fs'); 
let addedData = 'addedNewData';
let dataFile = 'data.txt';
 
fs.appendFile(dataFile, ('\n' + addedData), function(error){
    if(error) throw error; 
    console.log("File writing completed. File contents:");
    let data = fs.readFileSync("data.txt", "utf8");
    console.log(data);  // output the read data
});
