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
        faInstagram
    };


    return (
        <div className='w-[1519px] h-[454px] bg-[#F9F9F9] dark:bg-[#252128] relative overflow-hidden'>
            <div className='w-[483px] h-[290px] absolute left-[550px] top-[80px] flex flex-col gap-[24px]'>
                <h1 className='font-bold text-[48px] leading-[72px] text-[#4731D3] dark:text-[#8F88FF] '>{heading}</h1>
                <p className='w-[448px] font-normal text-[24px] text-[#120B39] dark:text-whit text-center'>{prompt}</p>
                <p className='w-auto font-medium text-[20px] leading-[24.2px] underline text-[#4731D3] dark:text-[#8F88FF] ml-[125px]'>{email}</p>
                <div className='flex gap-[15px] ml-[175px]'>
                    {socialIcons.map((icon, index) => (
                        <a key={index} href={icon.link} target='_blank' rel='noopener noreferrer' className=' w-[35px] h-[35px] text-[#4731D3] dark:text-[#8F88FF] '>
                            <FontAwesomeIcon icon={iconMap[icon.icon]} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );


};

export default Footer;
