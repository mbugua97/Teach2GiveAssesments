import {Router} from "express"
import {readEvents,readEvent,createEvents}  from "../controllers/index.mjs"
import {validateUser}  from "../routes/middleware/index.mjs"
import { bodyValidator } from "./validators/index.mjs"


const eventsRoutes  = Router()

//reading all the events
eventsRoutes.get('/api/v1/event',readEvents)

//readSpecific evet
eventsRoutes.get('/api/v1/event/event',readEvent)

//posting an event
eventsRoutes.post('/api/v1/event',validateUser,bodyValidator,createEvents)


eventsRoutes.put('/api/v1/event',validateUser, (req, res) => {
res.send("puting data")
})

eventsRoutes.delete('/api/v1/event',validateUser, (req, res) => {
    res.send("deleting events")
})


export default eventsRoutes