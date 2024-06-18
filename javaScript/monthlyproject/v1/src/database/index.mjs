import fs from 'node:fs';
import path from 'node:path';
import { body } from "express-validator";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();




process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});


//READING ALL EVENTS


export const  ReadEvents=async (req,res)=>{

//     fs.readFile('events.txt', 'utf8', (err, data) => {
//     if(err) throw err
//     data=JSON.parse(data)
//     res.send(data)
// })
try {
  const events = await prisma.events.findMany();
  res.json(events);
} catch (error) {
  res.status(500).json({ error: error.message });
}
};


//READING ONE EVENT


// export const  ReadEvent=(req,res)=>{
//   fs.readFile('events.txt', 'utf8', (err, data) => {
//   if(err) throw err
//   data=JSON.parse(data)
//   const {query :{event_id}}  = req //req.params.id
//   const parsedId = parseInt(event_id)
//   const OneEvent =data.find(data=>data.id ===parsedId)
//   if(!OneEvent) {
//   res.send("user not found")
//   }
//   res.send(OneEvent)
// }
// )}

export const ReadEvent = async (req, res) => {
  try {
    const { query: { event_id } } = req;
    const parsedId = parseInt(event_id);

    const event = await prisma.events.findUnique({
      where: { id: parsedId },
    });

    if (!event) {
      res.status(404).send("Event not found");
      return;
    }

    res.json(event);
  } catch (error) {
    res.status(500).send(`Error retrieving event: ${error.message}`);
  }
};



// ADDING EVENT


// export const AddEvents=(NewEvent)=>{
//   fs.readFile('events.txt', 'utf8', (err, data) => {
//     data=JSON.parse(data)
//     const ids=data.length+1
//     NewEvent={id:ids,...NewEvent}
//     data.push(NewEvent)
//     const updatedData = JSON.stringify(data);
//     fs.writeFile('events.txt', updatedData, (writeError) => {
//         if (writeError) {
//           console.log(" error addin data");;
//         }
//   })
//   })
// };




export const AddEvents = async (NewEvent) => {
  const events = await prisma.events.findMany();
  const ids=events.length+1
  NewEvent={id:ids,...NewEvent}
  try {
    const createdEvent = await prisma.events.create({
      data: NewEvent,
    });
    console.log(`Event added successfully: ${JSON.stringify(createdEvent)}`);
    return createdEvent;
  } catch (error) {
    console.error(`Error adding event: ${error.message}`);
    throw error;
  }
};