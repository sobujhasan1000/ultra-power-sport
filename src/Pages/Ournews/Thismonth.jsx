import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Thismonth = () => {
    return (
        <div>
            <div data-aos="flip-left" className=' md:flex xl:flex my-6 p-6'>
                <div className=' text-center lg:w-2/3 p-10 bg-black text-white'>
                    <h2 className='text-3xl font-extrabold'>PALYER OF THE MONTH</h2>
                    <h2 className='text-2xl font-extrabold  p-2 text-green-400 '>MR JHON SMITH</h2>
                    <h2 className='text-2xl font-extrabold pt-6 m-2'>WHAT'S NEXT THIS  MONTH</h2>
                    <p>The world of sports is ever changing. With technology rapidly gaining traction, with changing demographics and with changing consumer habits, it is extremely important to adjust quickly to the newly emerging trends. Clubs, federations, media, equipment manufacturers, textile companies, sport services providers and betting companies should be aware of the current 11 important trends in the world of sports.</p>
                </div>
                <div className='lg:w-1/3'>
                    <img className='h-96' src="https://i.ibb.co/pK8tGh8/BEST-PLAYER.webp" alt="player" />
                </div>
            </div>
        </div>
    );
};

export default Thismonth;