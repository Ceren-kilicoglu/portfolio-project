import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const [contactData, setContactData] = useState(null);

    useEffect(() => {
        fetch("/footer.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Veri başarıyla çekildi:", data);
                setContactData(data);
            })
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, []);

    if (!contactData) {
        return <div>Loading...</div>;
    }

    const { heading, prompt, email, socialIcons } = contactData;

    const iconMap = {
        faTwitter,
        faDribbble,

        faInstagram
    };

    return (
        <div>
            <h1>{heading}</h1>
            <p>{prompt}</p>
            <p>{email}</p>
            <div>
                {socialIcons.map((icon, index) => (
                    <a key={index} href={icon.link} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={iconMap[icon.icon]} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;
