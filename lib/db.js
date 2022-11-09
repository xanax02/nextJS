import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://abhay:abhay888@cluster0.kwjblrz.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
};
