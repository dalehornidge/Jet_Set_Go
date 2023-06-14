import connectToDb from '../../lib/mongodb';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { db, client } = await connectToDb();
      const collection = db.collection('itineraries');

      const itineraries = await collection.find().toArray();

      client.close();

      res.status(200).json({ itineraries });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving itineraries' });
    }
  } else {
    res.status(400).json({ message: 'Only GET requests are accepted' });
  }
};
