import { hashPassword } from "../../../lib/auth";
import { connectDB } from "../../../lib/db";

const helper = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password length should be greater than 7 characters",
    });
    return;
  }

  //Connection with db and creating client;
  const client = await connectDB();
  // creating or connecting to the database;
  const db = client.db();

  //hashing password
  const hashedPass = await hashPassword(password);

  // creating/ accessing USERS collection
  const result = await db
    .collection("users")
    .insertOne({ email: email, password: hashedPass });

  res.status(201).json({ message: "User-Created", body: result });
};

export default helper;
