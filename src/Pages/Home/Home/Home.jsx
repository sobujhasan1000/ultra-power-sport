import React from "react";
import Banner from "../Bannar/Banner";
import PopularClass from "../PopularCalss/PopularClass";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import Thismonth from "../../Ournews/Thismonth";

import TimeShow from "../Promotional/TimeShow";
import Blogs from "../Blogs/Blogs";
import NewsLetter from "../Newsletter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TimeShow></TimeShow>
      <PopularClass></PopularClass>
      <PopularInstractor></PopularInstractor>
      <Thismonth></Thismonth>
      {/* <Blogs></Blogs> */}
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
