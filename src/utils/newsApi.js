import { WEEK_IN_MS } from "./constants";

const dateOptions = {
  weekday: undefined,
  year: "numeric",
  month: "long",
  day: "numeric",
};

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

export const apiKey = "8709b00b791c4887ad9aaf636b41d4dc";
