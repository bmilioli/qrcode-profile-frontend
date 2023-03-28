import { api } from "../utils/config";
import axios from 'axios';

//Get Profile of a user
const getProfile = async (name) => {
    try {
        const response = await axios.get(`${api}/users/profile?name=${name}`, {
            timeout: 5000 // timeout de 5 segundos
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Não foi possível obter o perfil');
    }
}

export default getProfile;