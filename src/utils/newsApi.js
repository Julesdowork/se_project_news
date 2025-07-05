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
