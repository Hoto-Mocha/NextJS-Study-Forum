import config from "@/apikey";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: config.GithubOAuthId,
      clientSecret: config.GithubOAuthPW,
    }),
  ],
  secret : config.JWTPW
};
export default NextAuth(authOptions); 