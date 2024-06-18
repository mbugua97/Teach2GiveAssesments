import { ReadEvents,ReadEvent,AddEvents } from '../database/index.mjs'
import {validationResult} from "express-validator";
//get all events
export const readEvents =ReadEvents


//one event
export const readEvent=ReadEvent


export const createEvents=async (req, res) => {
    const errors = validationResult(req)    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const { imageUrl,title, price, date, location, company } = req.body;

    try {
      const newEvent = {
        imageUrl,
        title,
        price,
        date:new Date(date).toISOString(),
        location,
        company,
      };
  
      const createdEvent = await AddEvents(newEvent);
  
      res.status(201).json(createdEvent);
    } catch (error) {
      console.error(`Error creating event: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
};



//get a single user by id
export const deleteEvent = (req, res) => {
    const {params : {id}}  = req //req.params.id
    const parsedId = parseInt(id)
    const user = userData.find(userObj => userObj.id === parsedId)
    if(!user) {
        return res.status(400).json({
            status: 'fail',
            message: 'user not found'
        })
    }
     res.status(200).json({
        status: 'success',
        data : {user}
    })
}

