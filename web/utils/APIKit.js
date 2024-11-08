import axios from "axios";

export const createClientAPIKit = async () => {
  const APIKit = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
    timeout: 10000,
  });
  return APIKit;
};

export const createServerAPIKit = async (token_key) => {
  const API_ENDPOINT = process.env.BASE_API_ENDPOINT;
  let headers = {};
  if (token_key) {
    headers["Authorization"] = `Token ${token_key}`;
  }
  return axios.create({
    baseURL: API_ENDPOINT,
    timeout: 10000,
    headers: headers,
  });
};

export const networkError = (error) => {
  if (error.response) {
    // Request made and server responded
    if (error.response.status >= 500) return "Oops, server error";
    else return error.response.data?.detail || "Something went wrong";
  } else if (error.request) {
    // The request was made but no response was received
    return "You're offline";
  } else {
    // Something happened in setting up the request that triggered an Error
    return "Huh, something went wrong";
  }
};

export const getSessionToken = (req) => {
  const sessionToken =
    req.cookies["next-auth.session-token"] ||
    req.cookies["__Secure-next-auth.session-token"];
  return sessionToken;
};
