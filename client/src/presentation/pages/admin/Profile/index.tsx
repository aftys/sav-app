import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; 
import { RootState } from '../../../../store'; 

const Profile: React.FC = () => {
    const [userInfo, setUserInfo] = useState<any>(null); 
    const userId = useSelector((state: RootState) => state.auth); 

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch(`your-backend-api/users/${userId}`);
                if (response.ok) {
                    const userData = await response.json();
                    setUserInfo(userData);
                } else {
                    console.error('Failed to fetch user information');
                }
            } catch (error) {
                console.error('Error fetching user information:', error);
            }
        };

        fetchUserInfo();
    }, [userId]); 

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p>Nom: {userInfo.firstName}</p>
                <p>Prénom: {userInfo.secondName}</p>
                <p>Email: {userInfo.email}</p>
                <p>Téléphone: {userInfo.telph}</p>
                <p>Agence: {userInfo.agency}</p>
            </div>
        </div>
    );
};

export default Profile;
