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

export const apiKey = "8709b00b791c4887ad9aaf636b41d4dc";
