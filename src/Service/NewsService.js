import axios from "axios";

export const GetHeadlines = (topic) => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=9fdcf4bba00441d5987f148c2ead0e12`
  );
};

export const GetAllNews = (topic) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${topic}&apiKey=9fdcf4bba00441d5987f148c2ead0e12`
  );
};
