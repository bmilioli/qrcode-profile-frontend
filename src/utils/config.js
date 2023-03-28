//require('dotenv').config();

export const api = "http://localhost:5000/api";

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  config = {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
