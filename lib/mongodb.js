import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');

async function connectToDb() {
  await client.connect();
  const db = client.db('JetSetGo'); 
  return { db, client };
}

export default connectToDb;
