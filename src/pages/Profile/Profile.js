import React, { useEffect, useState } from 'react';

//components

//Hooks
import getProfile from '../../services/profileService';


function Profile() {
    const [data, setData] = useState({});
    const profile = window.location.pathname.split('/')[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile(profile);
                setData(result);
            } catch (error) {
                console.error(error);
                alert('Não foi possível carregar o perfil');
            }
        };
        fetchData();
    }, [profile]);

    const { name, linkedinID, githubID } = data;

    return (
        <div>
            <h1>Meu Perfil</h1>
            <p>{name}</p>
            <p>Olá, esse é o meu perfil</p>
            <button onClick={() => window.location.href = linkedinID}>LinkedIn</button>
            <button onClick={() => window.location.href = githubID}>GitHub</button>
        </div>
    );
}

export default Profile;
