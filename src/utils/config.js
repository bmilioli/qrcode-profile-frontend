
//export const api = "http://localhost:5000/api";
export const api = process.env.REACT_APP_API_URL;

export const requestConfig = (method, data) => {
  let config;

  config = {
    method,

    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
