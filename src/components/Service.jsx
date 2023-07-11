import React from "react";
import "../Service_module.css";

import CardService from "./CardService";

const Service = () => {
  return (
    <div>
      {/* TITULO DE OUR SERVICE */}
      <div className="w-full my-12">
        <h1 className="text-4xl font-bold text-orange-600 text-center">
          Our Service
        </h1>
      </div>
      <div className=" mt-20 ms-24 w-3/6">
        <h2 className="text-white text-2xl font-bold">
          We Always Ensure The Best Medical Treatment For Your Pet's Health.
        </h2>
      </div>
      <div className="mt-4 ms-24 w-2/5">
        <p className="text-white text-sm">
          "Assisting animals in becoming healthier and maintaining their
          well-being is an admirable mission, but in today's highly professional
          veterinary care, is providing good care enough to improve their health
          condition?"
        </p>
      </div>

      {/* CARDS */}

      <CardService />
    </div>
  );
};

export default Service;
