export const registerUser = (email, password, username) => {
  return new Promise((resolve, reject) => {
    resolve({ user: { email, password, username } });
  });
};

export const authorizeUser = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { email: "test@test.com", username: "Test", _id: "fake-id" },
    });
  });
};
