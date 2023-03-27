import { api, requestConfig } from '../utils/config';

//Register a new user
const register = async (data) => {
    const config = requestConfig('POST', data);
    try {

        const response = await fetch(`${api}/users/register`, config)
            .then(response => response.json())
            .catch(error => console.log(error));
        const data = await response.json();

        if (response.status === 200) {
            return data
        } else {
            throw new Error(data.message)
        }

    } catch (error) {
        console.log(error)
    }
}