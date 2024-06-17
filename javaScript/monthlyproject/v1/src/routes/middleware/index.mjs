import fs from 'fs';
import path from 'node:path';
import {bodyValidator} from "../validators/index.mjs"

const loadUserDataSync = () => {
        const data = fs.readFileSync('userdata.txt', 'utf8');
        return JSON.parse(data);
};


const users = loadUserDataSync();

//validating 
export const validateUser =(req, res, next)=> {
        const { headers,body } = req;
        const userid = parseInt(headers.userid,10);
        const findUserIndex = users.findIndex(user => user.id === userid);
        if (findUserIndex === -1) {return res.send("user not registers").status(404);}
        //admin
        else if(users[findUserIndex].admin===false){
            return res.send("user not allowed to post ").status(404)
        }
      next();     
};
