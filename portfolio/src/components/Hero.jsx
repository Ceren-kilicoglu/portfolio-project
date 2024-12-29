import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch("/hero.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setHeroData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!heroData) {
    return
  }

  const { profile, buttons, languageToggle, darkModeToggle } = heroData;

  return (
    <div className='hero-container flex overflow-hidden'>
      <div className="hero-blue-section  h-[671px]  w-[1550px] bg-bl">
        <div className="language-theme-switch text-[15px] h-[18px] w-[138px] absolute top-[35px] left-[895px] font-semibold">
          <button className="language-toggle  ">
            <span className="language-text text-yellw">{languageToggle.text}</span>
          </button>
        </div>
        <div className='hero-name-section w-[960px] h-[72px] absolute top-[37px] left-[280px]' >
          <h2 className="hero-name w-[700] text-[32px] leading-[72px] text-yellw font-bold">{profile.name}</h2>
        </div>
        <div className='hero-content  w-[955px] h-[375.89px] absolute top-[148px] left-[280px] flex justify-between'>
          <div className='hero-content-left  pt-24 '>
            <h1 className="hero-title  w-[528.88px] h-[118px] text-yellw text-[54px] leading-[59.4px] font-bold">{profile.title}</h1>
            <p className="hero-description pt-8 w-[528.88px] h-[58px] font-normal text-[24px] leading-[29.05px] text-whit ">{profile.description}</p>
            <div className="button-group flex gap-[10px] pt-16">
              <div className="github-button">
                <button
                  id="github"
                  type="button"
                  onClick={() => window.open(buttons.github.link, "_blank")}
                  className="social-button bg-whit text-xl text-dark-bl font-medium pt-3 pr-5 pb-3 pl-3 rounded shadow hover:bg-gray-100 "
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
                  <span className='pl-3'>{buttons.github.text}</span>
                </button>
              </div>
              <div className="linkedin-button ">
                <button
                  id="linkedin"
                  type="button"
                  onClick={() => window.open(buttons.linkedin.link, "_blank")}
                  className="social-button bg-whit text-xl text-dark-bl font-medium pt-3 pr-5 pb-3 pl-3 rounded shadow hover:bg-gray-100 "
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="icon" />
                  <span className='pl-3'>{buttons.linkedin.text}</span>
                </button>
              </div>
            </div>
          </div>
          <div className='pl-[50px]'>
            <img
              src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUvIknbL-2Unc2WHGB2T50a89kp7XGRxLAGcUuyozcUhQp~yepub90yfn175mOYD1PfJvV1h~rSPIi7AeDdqk4jtSHRIwdQwtWTckPrBUsyU7sgDia5NH-IHmDXey661jOPEWWlbl4xpfjpVrH03qscgo5S1~BxVnf5sqaKoEa8Je8d34A4mSSZ2wA6xOVnB2QNj89hcAbiKbmBkT6MPUDkaIM-9MeKaFl6npqFdSAtW2oL3-6k0mmGm5YVGnEhO0cY1qw65vzgR6gQFu691iIgQ6wc8fKiRM-1oPiYPkZ3Jp2faFBd8dpZ1JeSqlD5umzna1WVEoisc9GBT3iRfvQ__"
              alt="Hero Image"
              className="hero-image  h-[375.89px] w-[350px] rounded-[18px] object-cover  "
            />
          </div>
        </div>
      </div>
      <div className="green-container  h-[671px] w-[710px] left-[1008px] bg-yellw ">
        <div className="theme-switch mx-8 my-8 flex items-center space-x-2 ">
          <button className="theme-toggle w-[55px] h-[24px] bg-[#8F88FF] dark:bg-g-700 rounded-full flex items-center p-1">
            <div className="theme-indicator w-4 h-4 bg-yellow-300 rounded-full"></div>
          </button>
          <p className="text-[#4731D3]  font-semibold text-[15px] leading-[18.15px] ">{darkModeToggle.text}</p>
        </div>
      </div>
    </div >
  );
}

export default Hero;
