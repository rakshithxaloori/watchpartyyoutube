import axios from "axios";

/** @return { import("next-auth/adapters").Adapter } */
export default function MyAdapter(client, options = {}) {
  const APIKit = axios.create({
    baseURL: process.env.BASE_API_ENDPOINT + "/authentication",
    headers: {
      "X-Auth-Key": process.env.AUTH_KEY,
    },
  });
  return {
    async createUser(user) {
      console.log("createUser", user);
      const response = await APIKit.post("/user/create/", {
        user,
      });
      return response.data.payload?.user;
    },
    async getUser(id) {
      console.log("getUser", id);
      const response = await APIKit.post("/user/get/", {
        id,
      });
      return response.data.payload?.user;
    },
    async getUserByEmail(email) {
      console.log("getUserByEmail", email);
      const response = await APIKit.post("/user/get/", {
        email,
      });
      return response.data.payload?.user;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      console.log("getUserByAccount", providerAccountId, provider);
      const response = await APIKit.post("/user/get/", {
        providerAccountId,
        provider,
      });
      return response.data.payload?.user;
    },
    async updateUser(user) {
      console.log("updateUser", user);
      const response = await APIKit.post("/user/update/", {
        ...user,
        emailVerified: user.emailVerified?.toISOString(),
      });
      return response.data.payload?.user;
    },
    async deleteUser(userId) {
      console.log("deleteUser", userId);
      const response = await APIKit.post("/user/delete/", {
        userId,
      });
      return;
    },
    async linkAccount(account) {
      console.log("linkAccount", account);
      // Create and attach the account to user
      const response = await APIKit.post("/user/link/", {
        ...account,
      });
      return;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      console.log("unlinkAccount", providerAccountId, provider);
      const response = await APIKit.post("/user/unlink/", {
        providerAccountId,
        provider,
      });
      return;
    },
    async createSession({ sessionToken, userId, expires }) {
      console.log("createSession", sessionToken, userId, expires);
      const response = await APIKit.post("/session/create/", {
        sessionToken,
        userId,
        expires: expires.toISOString(),
      });
      return _formatSession(response.data.payload?.session);
    },
    async getSessionAndUser(sessionToken) {
      console.log("getSessionAndUser", sessionToken);
      const response = await APIKit.post("/session/get/", {
        sessionToken,
      });

      const user = response.data.payload?.user;
      const session = _formatSession(response.data.payload?.session);

      if (!user || !session) return null;
      return {
        user,
        session,
      };
    },
    async updateSession({ sessionToken }) {
      console.log("updateSession", sessionToken);
      const response = await APIKit.post("/session/update/", {
        ...sessionToken,
        expires: session.expires?.toISOString(),
      });
      return _formatSession(response.data.payload?.session);
    },
    async deleteSession(sessionToken) {
      console.log("deleteSession", sessionToken);
      const response = await APIKit.post("/session/delete/", {
        sessionToken,
      });
      return;
    },
    async createVerificationToken({ identifier, expires, token }) {
      console.log("createVerificationToken", identifier, expires, token);
      // https://authjs.dev/reference/adapters#verification-token
      // For passwordless sign in
      const response = await APIKit.post("/verification/create/", {
        identifier,
        expires,
        token,
      });
    },
    async useVerificationToken({ identifier, token }) {
      console.log("useVerificationToken", identifier, token);
      const response = await APIKit.post("/verification/use/", {
        identifier,
        token,
      });
    },
  };
}

const _formatSession = (session) => {
  if (!session) return null;
  return {
    ...session,
    expires: new Date(session.expires),
  };
};
