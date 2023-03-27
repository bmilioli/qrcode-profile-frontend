require('dotenv').config();

export const api = process.env.API_URL;

export const requestConfig = (method, data, token = null, image = null) => {
    let config

    if (method === 'DELETE' || data === null) {
        config = {
            method,
            headers: {}
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }

}
