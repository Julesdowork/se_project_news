export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const headers = { "Content-Type": "application/json" };

function checkResponses(res) {
  if (res.ok) {
    return res.json();
  }

  Promise.reject(`Error: ${res.status}`);
}

export { checkResponses };
