const logs= require('./Logevents.js')

const fs = require("fs");
const path = require("path");

const filePath='Logs/eventLogs.txt'

logs.LogEvents().then((dta)=>{

    process.on("uncaughtException", (err) => {
        console.log(`There was an uncaught exception: ${err} `);
        process.exit(
            );
      });

      const directoryName = path.dirname(filePath);

      if (!fs.existsSync(directoryName)) {
        fs.mkdirSync(directoryName, { recursive: true });
        fs.writeFile('Logs/eventlogs.txt',dta, function (err) {
            if (err) throw err;
          });  }
    else{
        fs.appendFile('Logs/eventlogs.txt',`\n${dta}`, function (err) {
            if (err) throw err;
          });  

    }
})




