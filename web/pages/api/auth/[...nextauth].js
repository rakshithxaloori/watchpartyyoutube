import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import MyAdapter from "@/utils/adapter";

const yt_scopes = [
  "openid",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

export const authOptions = {
  providers: [
    GoogleProvider({
      id: "google",
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: yt_scopes.join(" "),
        },
      },
    }),
  ],
  adapter: MyAdapter(),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async session(session) {
      session.session.user.type = session?.user?.type || null;
      return session;
    },
  },
};

export default async function auth(req, res) {
  return await NextAuth(req, res, authOptions);
}
