import fs from 'node:fs';
import path from 'node:path';
import { body } from "express-validator";

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});


export const  ReadEvents=(req,res)=>{

    fs.readFile('events.txt', 'utf8', (err, data) => {
    if(err) throw err
    data=JSON.parse(data)
    res.send(data)
})
}



export const  ReadEvent=(req,res)=>{
  fs.readFile('events.txt', 'utf8', (err, data) => {
  if(err) throw err
  data=JSON.parse(data)
  const {query :{event_id}}  = req //req.params.id
  const parsedId = parseInt(event_id)
  const OneEvent =data.find(data=>data.id ===parsedId)
  if(!OneEvent) {
  res.send("user not found")
  }
  res.send(OneEvent)
}
)}


export const AddEvents=(NewEvent)=>{
  fs.readFile('events.txt', 'utf8', (err, data) => {
    data=JSON.parse(data)
    const ids=data.length+1
    NewEvent={id:ids,...NewEvent}
    data.push(NewEvent)
    const updatedData = JSON.stringify(data);
    fs.writeFile('events.txt', updatedData, (writeError) => {
        if (writeError) {
          console.log(" error addin data");;
        }
  })
  })
};