const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb://localhost:27017');
const database = client.db('believenyLocal');
const schedule = database.collection('schedule');
const bookings = database.collection('bookings');


module.exports = {

    connectServer: function(){
        client.connect();
    },

    getSchedule: async function(cb){
        const result = await schedule.find().toArray();
        for (var i=0; i<result.length; i++){
            delete result[i]._id;
        }
        cb(result);
    },
};