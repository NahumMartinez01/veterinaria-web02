import React from "react";
import perro from "../images/perrro_img.png";
import shape from "../images/ellipse.png";

const Home = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2 mx-10 mt-52">
        <div className=" p-2 w-80 ms-4">
          <h1 className="text-4xl text-white m-0 leading-normal text-wrap">Animal welfare in our hands, happiness in your home.</h1>
          <h3 className="text-sm text-white m-0 text-wrap mt-4">
          "Your pet's good health is not something we can buy. However, investing in the care of your pets is priceless."
          </h3>
        </div>
        <div className="bg-gray-200 p-2 w-80 border rounded-full relative">
          <div>
              <img className="absolute  bottom-2" src={perro} alt="dog" width="270px" height="270px"/>
          </div>
        </div>
        <div className="p-2 w-60 justify-self-end">    
              <img src={shape} />  
        </div>
      </div>
    </div>
  );
};

export default Home;
