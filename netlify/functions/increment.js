const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://nizamoezdemir:QucEHnQ0zTpnkNdS@portfoliocluster.5lswzrf.mongodb.net/';
const dbName = 'portfolio';

exports.handler = async function(event, context) {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection('Counter');
    console.log('event.body:', event.body.context);
    const videoname = JSON.parse(event.body).videoname;
    

    const videoEntry = await collection.findOneAndUpdate(
      { name: videoname },
      { $inc: { count: 1 }, $setOnInsert: { name: videoname } },
      { upsert: true, returnOriginal: false }
    );

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
