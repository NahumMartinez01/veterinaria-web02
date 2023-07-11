import React from "react";
import shape from "../images/ellipse.png";
import vacunas from "../images/vacunas.png";
import cardiologia from "../images/cardiologia.png";
import peluqueria from "../assets/peluqueria.svg";
const CardService = () => {
  return (
    <div className="grid grid-cols-3 gap-24 mx-24 mt-36 ">
      {/* Servicio Peluqueria */}

      <div className="bg-sky-400 p-4 relative h-64">
        <div className="absolute right-0 -top-1">
          <img src={shape} width="90px" height="90px" />
        </div>

        <h2 className="text-amber-600 text-lg text-center font-bold mt-24 mb-4">
          Gromming
        </h2>

        <div className="bg-white shadow-md rounded-md w-16 h-12 mx-auto pt-2 mb-2">
          <img
            src={peluqueria}
            alt="Imagen de la tarjeta"
            className="mx-auto mb-2"
          />
        </div>

        <p className="text-white text-sm text-center">
          We offer pet grooming services.
        </p>
      </div>

      {/*  Servicio Vacuna */}

      <div className="bg-cyan-400  p-4 relative h-64">
        <div className="absolute right-0 -top-1">
          <img src={shape} width="90px" height="90px" />
        </div>

        <h2 className="text-amber-600 text-lg text-center font-bold mt-24 mb-4">
          Vaccination
        </h2>

        <div className="bg-white shadow-md rounded-md w-16 h-12 mx-auto pt-1 mb-2">
          <img
            src={vacunas}
            alt="Imagen de la tarjeta"
            className="mx-auto"
            width="40px"
            height="40px"
          />
        </div>

        <p className="text-white text-sm text-center">
          We offer pet vaccination services.
        </p>
      </div>

      {/* Servicio Cardioologia */}

      <div className="bg-sky-400  p-4 relative h-64">
        <div className="absolute right-0 -top-1">
          <img src={shape} width="90px" height="90px" />
        </div>

        <h2 className="text-amber-600 text-lg text-center font-bold mt-24 mb-4">
          Cardiology
        </h2>
        <div className="bg-white shadow-md rounded-md w-16 h-12 mx-auto pt-1 mb-2">
          <img
            src={cardiologia}
            alt="Imagen de la tarjeta"
            className="mx-auto"
            width="40px"
            height="40px"
          />
        </div>

        <p className="text-white text-sm text-center">
          We offer cardiology services for your pet.
        </p>
      </div>
    </div>
  );
};

export default CardService;
