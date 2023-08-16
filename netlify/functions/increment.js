const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://nizamoezdemir:QucEHnQ0zTpnkNdS@portfoliocluster.5lswzrf.mongodb.net/';
const dbName = 'portfolio';

exports.handler = async function(event, context) {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log("Client "+client);
    const db = client.db(dbName);
    console.log("DB  "+client.db(dbName));
    const collection = db.collection('Counter');
    console.log("Collection "+collection);
    const videoname = JSON.parse(event.body).videoname;
    console.log("Videoname " + videoname);

    const currentTime = new Date();

    const videoEntry = await collection.findOneAndUpdate(
      { name: videoname },
      { 
        $inc: { count: 1 }, 
        $setOnInsert: { name: videoname },
        $set: { lastUpdated: currentTime } 
      },
      { upsert: true, returnOriginal: false }
    );
    console.log("VideoEntry " + videoEntry);

    client.close();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(videoEntry.value),
    };

  } catch (err) {
    console.error(err.message);
    console.error(err.stack);
    return {
      statusCode: 500,
      body: 'Ein Fehler ist aufgetreten',
    };
  }
}
