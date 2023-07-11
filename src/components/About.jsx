import React from "react";
import banner from "../images/veterinaria.png";
import banner2 from "../images/banner2.png";
const About = () => {
  return (
    <div>
      <div className="w-full my-12">
        <h1 className="text-4xl font-bold text-orange-600 text-center">
          About Us
        </h1>
      </div>

      <div className="flex justify-evenly items-center mx-12">
        <div className="w-3/6">
          <img src={banner} width="600px" height="700px" />
        </div>
        <div className="w-1/3 ms-24 ">
          <h2 className="text-white text-2xl font-bold">
            We Always Ensure The Best Medical Treatment For Your Pet's Health.
          </h2>

          <div className="mt-4">
            <p className="text-white text-sm">
              "Assisting animals in becoming healthier and maintaining their
              well-being is an admirable mission, but in today's highly
              professional veterinary care, is providing good care enough to
              improve their health condition?"
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-start mx-12 mt-10">
        <div className="w-1/3 ms-24 mt-12">
          <h2 className="text-white text-2xl font-bold">
            Why Choose Our Clinic?
          </h2>

          <div className="mt-4">
            <p className="text-white text-sm">
            ClínicaPet is available for your furry companions 24 hours a day, seven days a week. Our dedicated team of veterinary professionals comes directly to your home, providing exceptional care, comfort, and convenience for your beloved pets. Contact us today to learn more about our membership plans or if you have any other questions. We are here to assist you in ensuring the well-being and health of your four-legged family members.
            </p>
          </div>
        </div>

        <div className="w-3/6">
          <img src={banner2} width="600px" height="700px" />
        </div>
      </div>
    </div>
  );
};

export default About;
