import { MongoClient } from "mongodb";
import { delBasePath } from "next/dist/next-server/lib/router/router";
// import {
//   connectDatabase,
//   insertDocument,
//   getAllDocuments,
// } from '../../../helpers/db-util';

// async function handler(req, res) {
//   const eventId = req.query.eventId;

//   let client;

//   try {
//     client = await connectDatabase();
//   } catch (error) {
//     res.status(500).json({ message: 'Connecting to the database failed!' });
//     return;
//   }

//   if (req.method === 'POST') {
//     const { email, name, text } = req.body;

// if (
//   !email.includes('@') ||
//   !name ||
//   name.trim() === '' ||
//   !text ||
//   text.trim() === ''
// ) {
//   res.status(422).json({ message: 'Invalid input.' });
//   client.close();
//   return;
// }

// const newComment = {
//   email,
//   name,
//   text,
//   eventId,
// };

//     let result;

//     try {
//       result = await insertDocument(client, 'comments', newComment);
//       newComment._id = result.insertedId;
//       res.status(201).json({ message: 'Added comment.', comment: newComment });
//     } catch (error) {
//       res.status(500).json({ message: 'Inserting comment failed!' });
//     }
//   }

//   if (req.method === 'GET') {
//     try {
//       const documents = await getAllDocuments(client, 'comments', { _id: -1 });
//       res.status(200).json({ comments: documents });
//     } catch (error) {
//       res.status(500).json({ message: 'Getting comments failed.' });
//     }
//   }

//   client.close();
// }

// export default handler;

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://abhay:abhay888@cluster0.kwjblrz.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("events");

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const result = await db.collection("comments").insertOne(newComment);
    newComment.id = result.insertedId;
    console.log(result);
    res.status(201).json({ message: "SUCCESS", comment: newComment });
  } else {
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(201).json({ message: "req Successfull", comments: documents });
  }

  client.close();
};

export default handler;
