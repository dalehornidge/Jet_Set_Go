import connectToDb from '../../lib/mongodb';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { itinerary, userId } = req.body;

    if (!itinerary || !userId) {
      return res.status(400).json({ message: 'Itinerary and user ID are required' });
    }

    try {
      const { db, client } = await connectToDb();
      const collection = db.collection('itineraries');

      const result = await collection.insertOne({ itinerary, userId });

      client.close();

      res.status(200).json({ message: 'Itinerary saved successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving itinerary' });
    }
  } else {
    res.status(400).json({ message: 'Only POST requests are accepted' });
  }
};
