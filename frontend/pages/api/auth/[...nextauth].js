import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {
  NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_DATABASE_URL,
  NEXTAUTH_URL,
} from "../../../constants/index";
import * as jwt from "jsonwebtoken";

const providers = [
  Providers.Credentials({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        const res = await fetch(
          `http://localhost:1337/users/?email=${credentials.email}`
        );

        const json = await res.json();
        console.log(json);

        if (json.length >= 1) {
          console.log("Succes");
          const user = {
            id: json[0].id,
            email: json[0].email,
            username: json[0].username,
            role: json[0].role,
          };

          const token = jwt.sign(user, "qsudhsuoshqou");
          return { status: "success", ...user, token };
        }
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
    if (user) {
      token.accessToken = user.token;
    }

    return token;
  },

  async session(session, user) {
    session.accessToken = user.token;
    session.user = user;

    return session;
  },
};

const options = {
  site: "http://localhost:3003",
  providers,
  callbacks,
  pages: {
    error: "/login", // Changing the error redirect page to our custom login page
  },
};

export default (req, res) => NextAuth(req, res, options);
