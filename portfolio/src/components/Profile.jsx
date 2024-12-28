import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetch("/profile.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Veri başarıyla çekildi:", data); // Veri yüklendiğinde konsola yazdır
                setProfileData(data);
            })
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, []);

    if (!profileData) {
        return <div>Loading...</div>; // Veriler yüklenirken bir yükleme mesajı göster
    }

    const { profile, aboutMe, image } = profileData;

    return (
        <div className='bg-bl h-96 flex '>

            <div className=''>
                <h1 className='text-yellw font-semibold text-5xl'>{profile.title}</h1>
                <h2 className='text-white text-2xl'>{profile.subtitle}</h2>
                <ul>
                    <li>
                        <span className='text-yellw font-medium text-medium'>Birth:</span>
                        <span className='text-white font-medium text-medium'> {profile.details.birth}</span>
                    </li>
                    <li>
                        <span className='text-yellw font-medium text-medium'>Residence City:</span>
                        <span className='text-white font-medium text-medium'> {profile.details.residence}</span>
                    </li>
                    <li>
                        <span className='text-yellw font-medium text-medium'>Education:</span>
                        <span className='text-white font-medium text-medium'> {profile.details.education}</span>
                    </li>
                    <li>
                        <span className='text-yellw font-medium text-medium'>Preferred Role:</span>
                        <span className='text-white font-medium text-medium'> {profile.details.preferredRole}</span>
                    </li>
                </ul>
            </div>
            <div>
                <img src={image} alt="Profile" />
            </div>
            <div>
                <h2 className="text-white text-2xl">{aboutMe.title}</h2>
                <p className='text-white font-medium text-medium'>{aboutMe.description}</p>
            </div>

        </div>
    );
};

export default Profile;
