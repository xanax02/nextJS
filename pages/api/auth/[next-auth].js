// this is catch all api route as next-auth has login, logout and many other routes
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // NextAuth after execution return a handler function which then is exported.
  providers: [
    Providers.Credentials({
      // Providers.Credentials for our own credetials auth, also can use other providers like gmail,github. etc
    }),
  ],
});
