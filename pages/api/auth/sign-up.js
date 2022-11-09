import { connectDB } from "../../../lib/db";

const helper = async (req, res) => {
  //Connection with db and creating client;
  const client = await connectDB();
  // creating or connecting to the database;
  const db = client.db("auth-demo");

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length() < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password length should be greater than 7 characters",
    });
    return;
  }

  // creating/ accessing USERS collection
  db.collection("users").insertOne({ email: email, password: password });
};

export default helper;
