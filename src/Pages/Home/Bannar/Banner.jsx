import React from 'react';
import img1 from '../../../../src/assets/BannerImg/cricke.jpeg'
import img2 from '../../../../src/assets/BannerImg/football.jpg'
import img3 from '../../../../src/assets/BannerImg/hockey.jpg'
import img4 from '../../../../src/assets/BannerImg/badminton.jpg'
import img5 from '../../../../src/assets/BannerImg/swimming.jpg'
import img6 from '../../../../src/assets/BannerImg/tenis.jpg'

const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={img5} className="w-full" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src={img6} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div>
        </>
    );
};

export default Banner;