import { MongoClient } from "mongodb";

// export async function connectDatabase() {
//   const client = await MongoClient.connect(
//     'mongodb+srv://maximilian:8ZO3ycZqJ23kWBQx@cluster0.ntrwp.mongodb.net/events?retryWrites=true&w=majority'
//   );

//   return client;
// }

// export async function insertDocument(client, collection, document) {
// const db = client.db();

// const result = await db.collection(collection).insertOne(document);

// return result;
// }

// export async function getAllDocuments(client, collection, sort) {
//   const db = client.db();

//   const documents = await db
//     .collection(collection)
//     .find()
//     .sort(sort)
//     .toArray();

//   return documents;
// }

export const connectDatabase = async () => {
  const client = await MongoClient.connnect(
    "mongodb+srv://abhay:abhay888@cluster0.kwjblrz.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
