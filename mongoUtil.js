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

    postBooking: async function (data, cb){
        var validate;
        const findDuplicate = await schedule.findOne({date: data.date.concat(" ", data.time)});

        if (findDuplicate === null){
            const post = await schedule.insertOne({date: data.date.concat(" ", data.time), name: data.name});
            console.log(`Logged booking for ${data.date.concat(" ", data.time)}`);
            validate = true;
        }else{
            validate = false;
        }
        
        cb(validate);
    }
};