//export const API_URL = "http://localhost:1337";
//export const API_URL = "https://integration4strapi.herokuapp.com";
//export const WEBSITE_URL = "https://mts-4-integration4-team5.vercel.app";
//export const WEBSITE_URL = "http://localhost:3000";
export const WEBSITE_URL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const JWT_KEY = "he4564erg986vvsd6g4rge91dfs365v";
