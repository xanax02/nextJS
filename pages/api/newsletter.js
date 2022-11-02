import { MongoClient } from "mongodb";

// import { connectDatabase, insertDocument } from "../../helpers/db-util";

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     const userEmail = req.body.email;

// if (!userEmail || !userEmail.includes('@')) {
//   res.status(422).json({ message: 'Invalid email address.' });
//   return;
// }

//     let client;

//     try {
//       client = await connectDatabase();
//     } catch (error) {
//       res.status(500).json({ message: 'Connecting to the database failed!' });
//       return;
//     }

//     try {
//       await insertDocument(client, 'newsletter', { email: userEmail });
//       client.close();
//     } catch (error) {
//       res.status(500).json({ message: 'Inserting data failed!' });
//       return;
//     }

//     res.status(201).json({ message: 'Signed up!' });
//   }
// }

const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://abhay:abhay888@cluster0.kwjblrz.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
};

const insertDocument = async (client, documents) => {
  const db = client.db();
  await db.collection("newsletter").insertOne(documents);
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // MongoClient.connect("mongodb+srv://abhay:abhay.15@cluster0.kwjblrz.mongodb.net/?retryWrites=true&w=majority").then(client => {
    //   const db = client.db(newsletter);
    //   return db.collection('emails').insertOne({email:userEmail});
    // })

    // OR By Async Await

    // const client = await MongoClient.connect(
    //   "mongodb+srv://abhay:abhay888@cluster0.kwjblrz.mongodb.net/events?retryWrites=true&w=majority"
    // );
    // const db = client.db();

    // await db.collection("newsletter").insertOne({ email: userEmail });

    let client;

    //error handling for database connection
    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Connection to database failed" });
      return;
    }
    //error handling for database insertion
    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (err) {
      res.status(501).json({ message: "Insertion in database failed" });
      return;
    }
    res.status(201).json({ message: "success", email: userEmail });
  }
};

export default handler;
