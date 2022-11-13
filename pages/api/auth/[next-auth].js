// this is catch all api route as next-auth has login, logout and many other routes
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { connectDB } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  // NextAuth after execution return a handler function which then is exported.
  session: {
    // this fields contains how that session should be managed for that user.
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      // Providers.Credentials for our own credetials auth, also can use other providers like gmail,github. etc
      // credentials: {       //This will generate a form, created by next-auth for the credentials.
      // }
      // but we already have our own form so we will use only authorize method

      async authorize(credentials) {
        //method that will be called by nextjs when it recieves incoming login request

        //logic for login

        //connecting to db
        const client = await connectDB();

        // selecting user collection.
        const userCollection = client.db().collection("users");

        // finding userEmail in user collection
        const user = await userCollection.findOne({ email: credentials.email });

        //if user is not found, returnig an error
        // if error is thrown inside authorze it will reject the promise and redirect client to other page by default
        if (!user) {
          client.close();
          throw new Error("User not Found");
        }

        // now if the user exists we'll compare the passwords
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        // if password doesnot match
        if (!isValid) {
          client.close();
          throw new Error("Could not log you In");
        }

        // by returning object inside authorize lets next-auth know authorization succeded
        // and this object is encoded into JSON WEB TOKEN (JWT).
        client.close();
        return { email: user.email };
      },
    }),
  ],
});
