import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { JWT_KEY, API_URL } from "../../../constants/index";
import * as jwt from "jsonwebtoken";
import axios from "axios";

const providers = [
  Providers.Credentials({
    name: "Credentials",
    authorize: async (credentials) => {
      //console.log(credentials);
      try {
        //fetch user
        /*
        const res = await fetch(`${API_URL}/users/?email=${credentials.email}`);
        const json = await res.json();
        console.log(json);
        //Comparing passwords
        if (json.length >= 1) {
          console.log("Succes");
          const user = {
            id: json[0].id,
            email: json[0].email,
            username: json[0].username,
            role: json[0].role,
          };
          const token = jwt.sign(user, JWT_KEY);
          return { status: "success", ...user, token };
        }
        */
        return axios
          .post(`${API_URL}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          })
          .then((response) => {
            //console.log("User profile", response.data.user);
            //console.log(response.data.user);
            //console.log("User token", response.data.jwt);
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
    //console.log(token);
    //console.log(user);
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
    //console.log(session, user);
    session.accessToken = user.accessToken;
    session.user = user;

    return session;
  },
};

const options = {
  site: "http://localhost:3000",
  providers,
  callbacks,
  pages: {
    error: "/",
    signIn: "/login",
    signOut: "/",
    newUser: "/dashboard", // Changing the error redirect page to our custom login page
  },
};

export default (req, res) => NextAuth(req, res, options);
