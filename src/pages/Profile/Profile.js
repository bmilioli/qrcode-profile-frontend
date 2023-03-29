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
                setData(result.data.currentUser);
                console.log(result.data.currentUser);

            } catch (error) {
                console.error(error);
                alert('It was not possible to get the profile');
            }
        };
        fetchData();
    }, [profile]);

    const { name, linkedinId, githubId } = data;


    return (
        <div>
            <h1>Meu Perfil</h1>
            <p>{name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <button onClick={() => window.location.href = linkedinId}>LinkedIn</button>
            <button onClick={() => window.location.href = githubId}>GitHub</button>
        </div>
    );
}

export default Profile;
