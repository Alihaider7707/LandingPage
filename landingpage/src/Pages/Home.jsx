import React from "react";
import Slider from "./Slider";
import ImageBox from "./ImageBox";
import Banner01 from "./Banner01";
import HealthyMenu from "./HealthyMenu";
import Aboutus from "./Aboutus";
import Box from "./Box"

function Home() {
  return (
    <div>
      <Slider />
      <ImageBox />
      <Banner01 />
      <HealthyMenu />
      <Aboutus />
      <Box/>
    </div>
  );
}

export default Home;
