import axios from "axios";

export const api = axios.create({
  baseURL: "https://odds.p.rapidapi.com/v4/sports",
  headers: {
    "X-RapidAPI-Key": "7ec3b9633dmsh98649ebbd2b403ap18abc7jsnf831910d7871",
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
});
