import { api, requestConfig } from "../utils/config";

//Register a new user
const register = async (data) => {
  const response = await fetch(`${api}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

export default register;
