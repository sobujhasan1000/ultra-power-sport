import React from "react";
import bgImg from "../../../../src/assets/BannerImg/inspair-bg.png";
import Img from "../../../../src/assets/BannerImg/newslatter.png";

const NewsLetter = () => {
  return (
    <div
      className="bg-cover bg-center py-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-end md:items-end p-4">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-0">
          <img
            src={Img}
            alt="Newsletter"
            className="w-3/4 lg:w-full -mb-10 lg:-mb-12"
          />
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left px-4 mt-auto mb-auto">
          <p className="text-xl text-gray-700 mb-2">Get Connected</p>
          <h1 className="text-xl lg:text-3xl font-bold my-4 ">
            Education That Sparks Imagination <br /> Nurturing Curiosity Inspire
          </h1>
          <form
            action="email"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col lg:flex-row items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-2/3 p-6 mb-4 lg:mb-0 lg:mr-4 border rounded"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
