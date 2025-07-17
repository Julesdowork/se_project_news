import { checkResponses } from "./api";
import { WEEK_IN_MS, API_KEY } from "./constants";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const headers = { "Content-Type": "application/json" };

const dateOptions = {
  weekday: undefined,
  year: "numeric",
  month: "long",
  day: "numeric",
};

function getNewsArticles(keyword) {
  const dates = getRelevantDates();
  return fetch(
    `${baseUrl}?q=${keyword}&apiKey=${API_KEY}&from=${dates[0]}&to=${dates[1]}`
  ).then(checkResponses);
}

export const filterNewsData = (data) => {
  const result = data.articles;
  return result;
};

export const getDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, dateOptions);
};

export const getRelevantDates = () => {
  const todaysDate = new Date();
  const todaysDateStr = todaysDate.toISOString();
  const oneWeekAgo = new Date(todaysDate - WEEK_IN_MS).toISOString();
  const dates = [oneWeekAgo, todaysDateStr];
  return dates;
};

export { getNewsArticles };
