const {format} =require('date-fns');
const { v4: uuidv4 } = require("uuid");


async function LogEvents(){
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM do, yyyy');
    const uuid = uuidv4();
    return(`${formattedDate} ${uuid}`)
}




module.exports = {LogEvents}