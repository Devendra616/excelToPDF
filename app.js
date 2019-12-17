const libre = require('libreoffice-convert');
 
const path = require('path');
const fs = require('fs');
 
const extend = '.xlsx'
const enterPath = path.join(__dirname, '/resources/Yly-Drill.xls');
const outputPath = path.join(__dirname, `/resources/Yly-Drill${extend}`);
 
// Read file
const readpath = fs.readFileSync(enterPath);
// Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
libre.convert(readpath, extend, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }
    
    // Here in done you have pdf file which you can save or transfer in another stream
    fs.writeFileSync(outputPath, done);
});