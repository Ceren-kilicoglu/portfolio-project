import skillsImage from '../assets/img/skills.jpg';



function Skills() {
    return (
        <div className='skills-section flex justify-center -mt-16'>
            <div className='skills-img'>
                <img src={skillsImage} alt="skills" />
            </div>
        </div>
    )
}

export default Skills