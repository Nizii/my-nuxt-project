import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://nizamoezdemir:QucEHnQ0zTpnkNdS@portfoliocluster.5lswzrf.mongodb.net/';
const dbName = 'portfolio';

export async function handler(event, context) {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection('Counter');

    const videoName = JSON.parse(event.body).videoName;

    const videoEntry = await collection.findOneAndUpdate(
      { name: videoName },
      { $inc: { count: 1 }, $setOnInsert: { name: videoName } },
      { upsert: true, returnOriginal: false }
    );

    client.close();
    return {
      statusCode: 200,
      body: JSON.stringify(videoEntry.value),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Ein Fehler ist aufgetreten',
    };
  }
}
