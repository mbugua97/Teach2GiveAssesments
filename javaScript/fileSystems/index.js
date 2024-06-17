const prmS = require("fs").promises;

const path = require("path");

const filesOps = async () => {//crud
  try {
    //creating
    await prmS.writeFile(path.join(__dirname, "firstPath", "index.txt"),"i have created the file",(err, create) => {
          if (err) throw err;
          console.log(`write was successful ${create}`)})
    //reading data
    const data=await prmS.readFile(path.join(__dirname, "firstPath", "index.txt"),{ encoding: "utf8" });
    console.log(`read_data:${data}`);
    //writing data
    await prmS.writeFile(path.join(__dirname, "firstPath", "index.txt"),"new data writing",(err, write) => {
        if (err) throw err;
      console.log(`eror writing`);
      })
    }
      
catch (error) {
    console.log(error);
  }
}
filesOps();
