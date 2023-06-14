import connectToDb from '../../lib/mongodb';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { db, client } = await connectToDb();
    const collection = db.collection('itineraries');
    const { userId, itinerary } = req.body;

    const result = await collection.insertOne({ userId, itinerary });

    client.close();

    res.status(200).json({ message: 'Itinerary saved' });
  } else {
    res.status(400).json({ message: 'Only POST requests are accepted' });
  }
};
