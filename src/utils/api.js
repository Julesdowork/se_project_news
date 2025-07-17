function checkResponses(res) {
  if (res.ok) {
    return res.json();
  }

  Promise.reject(`Error: ${res.status}`);
}

export { checkResponses };
