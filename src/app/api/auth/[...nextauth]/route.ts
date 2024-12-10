import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };