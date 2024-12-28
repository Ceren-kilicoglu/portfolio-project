import React from 'react';

const Introduce = () => {
    return (
        <div className='bg-bl h-96  '>
            <div className='flex space-x-8 ps-72 '>
                <div>
                    <h1 className='text-yellw font-semibold text-5xl '>Profile</h1>
                    <h2 className='text-white text-2xl'>Basic Information</h2>
                    <ul>
                        <li><span className='text-yellw font-medium text-medium'>Birth:</span> <span className='text-white font-medium text-medium'>25.02.1998</span></li>
                        <li><span className='text-yellw font-medium  text-medium'>Residence City:</span><span className='text-white font-medium text-medium'> Antalya</span></li>
                        <li><span className='text-yellw font-medium text-medium'>Education:</span><span className='text-white font-medium text-medium'> Akdeniz University, Germanistic,2024</span></li>
                        <li><span className='text-yellw font-medium text-medium'>Prefered Role:</span> <span className='text-white font-medium text-medium'>Frontend, UI</span></li>
                    </ul>
                </div>
                <div>
                    <img src="https://picsum.photos/seed/picsum/200/200" alt="" />
                </div>
                <div>
                    <h2 className="text-white text-2xl">About Me</h2>
                    <p className='text-white font-medium text-medium'>I am a frontend developer focused on building responsive, intuitive, and visually appealing web interfaces. I enjoy turning creative ideas into functional and user-friendly digital experiences.</p>
                </div>
            </div>
        </div >
    );
};

export default Introduce;
