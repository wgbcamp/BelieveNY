const e = require("express");
const { MongoClient } = require("mongodb");
// const client = new MongoClient('mongodb://localhost:27017');
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
        const findDuplicate = await schedule.findOne({date: data.date.concat(" ", data.time)});

        if (findDuplicate === null){
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