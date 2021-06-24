import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { JWT_KEY, API_URL, WEBSITE_URL } from "../../../constants/index";
import * as jwt from "jsonwebtoken";
import axios from "axios";

const providers = [
  Providers.Credentials({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        return axios
          .post(`${API_URL}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          })
          .then((response) => {
            return {
              user: {
                ...response.data.user,
                ...response.data,
              },
              token: response.data.jwt,
            };
          })
          .catch((error) => {
            console.log("An error occurred:", error.response);
          });
      } catch (e) {
        const errorMessage = e.response.data.message;
        // Redirecting to the login page with error messsage in the URL
        throw new Error(errorMessage + "&email=" + credentials.email);
      }
    },
  }),
];

const callbacks = {
  async jwt(token, user) {
    console.log(user);
    if (user) {
      token.accessToken = user.accessToken;
      token.user = user;
    }
    console.log("________________");
    console.log(token);

    return token;
  },

  async session(session, user) {
    session.accessToken = user.accessToken;
    session.user = user;

    return session;
  },
};

const options = {
  site: WEBSITE_URL,
  providers,
  callbacks,
  pages: {
    error: "/login",
    signIn: "/login",
    signOut: "/",
    newUser: "/register",
  },
};

export default (req, res) => NextAuth(req, res, options);
