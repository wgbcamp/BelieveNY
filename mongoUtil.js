require('dotenv').config();
const e = require("express");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);
const database = client.db('believenyLocal');
const schedule = database.collection('schedule');
const bookings = database.collection('bookings');


module.exports = {

    connectServer: function(){
        client.connect();
    },

    getSchedule: async function(data, cb){
        const result = await schedule.find().toArray();
        for (var i=0; i<result.length; i++){
            delete result[i]._id;
            delete result[i].name;
        }
        console.log(result);
        cb(result);
    },

    findOneBooking: async function (data, cb){

        var result = await schedule.findOne({_id: data.id});
        if (result === null){
            result = "This session does not exist."
        }else{
            result = result.date;
        }
        cb(result);
    },

    deleteOneBooking: async function (data, cb){

        var getData = await schedule.findOne({_id: data.id});
        var result = await schedule.deleteOne({_id: data.id});
        var message;
        console.log(result);
        if (result.deletedCount < 1){
            message = "We encountered an error when submitting your cancellation request. Your session may have already been deleted."
        }else{
            message = "Your session has been cancelled. Thank you.";
        }
        cb(message, result.deletedCount, getData);
    },

    postBooking: async function (data, cb){
        var validate;
        
        //validate that submitted request fits within 24 hours limit
        const clientDate = data.date.concat(" ", data.time);
        const trimmedClientDate = clientDate.slice(clientDate.indexOf(",")+2, clientDate.indexOf(":")-2).trim();
        const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = trimmedClientDate.slice(0, trimmedClientDate.indexOf(" "));
        const month = monthArray.indexOf(monthName)+1;
        const day = trimmedClientDate.slice(trimmedClientDate.indexOf(" "), trimmedClientDate.indexOf(",")).trim();
        const year = trimmedClientDate.slice(-4);
        const trueClientDate = month + "/" + day + "/" + year;
        const trueClientHour = clientDate.slice(clientDate.indexOf(":")-2, clientDate.indexOf(":")).trim();
        const trueClientMeridiem = clientDate.slice(-2);
        // var trueClient24Hour;
        // if (trueClientMeridiem === "PM"){
        //     trueClient24Hour = parseInt(trueClientHour)+12;
        // }

        var d = new Date();
        //invalidate if server day is the same day as request day
        if(d.toLocaleString().slice(0, d.toLocaleString().indexOf(",")) === trueClientDate){
            validate = false;
          }

        //find duplicate entries
        const findDuplicate = await schedule.findOne({date: data.date.concat(" ", data.time)});

        if (findDuplicate === null && validate !== false){
            var uniqueID = Math.random().toString(36).substring(2).concat(Math.random().toString(36).substring(2));
            const post = await schedule.insertOne({_id: uniqueID, date: data.date.concat(" ", data.time), name: data.name});
            console.log(`Logged booking for ${data.date.concat(" ", data.time)}`);
            data.id = uniqueID;
            validate = true;
        }else{
            validate = false;
        }
        
        cb(validate, data);
    }
};