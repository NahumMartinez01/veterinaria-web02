import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import registerCustomer from "../services/registerCustomer";

const RegisterCustomer = () => {

    
    
  const [name, handleNamesChange] = useForm("");
  const [lastname, handleLastNameChange] = useForm("");
  const [dui, handleDuiChange] = useForm("");
  const [birthday, handleLastBirthdayChange] = useForm("");
  const [phone, handlePhoneChange] = useForm("");
  const [email, handleEmailChange] = useForm("");
  const [password, handlePasswordChange] = useForm("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerCustomer({
      name,
      lastname,
      dui,
      birthday,
      phone,
      email,
      password,
    });

    
  };
  return (
    <div className="bg-white  container-lg mx-auto px-4 w-2/4 max-w-md  rounded-lg mt-32">
      <div>
        <div className="text-center ">
          <h1 className="text-2xl text-black font-bold pt-6">Register</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white  px-8 pt-6 pb-8 mb-4 mt-4 w-full mx-center "
        >
          <div>
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold ">
                Name:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Write your name"
                  value={name}
                  onChange={handleNamesChange}
                  required
                ></input>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold ">
                LastName:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Write your lastname"
                  value={lastname}
                  onChange={handleLastNameChange}
                  required
                ></input>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold ">
                Dui:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="01236594-4"
                  minLength="10"
                  maxLength="10"
                  value={dui}
                  onChange={handleDuiChange}
                  required
                ></input>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold ">
                Birthday:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  value={birthday}
                  onChange={handleLastBirthdayChange}
                  required
                ></input>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold ">
                Phone:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="7145-6980"
                  minLength="9"
                  maxLength="9"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                ></input>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold ">
                Email:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                ></input>
              </label>
            </div>

            <div className="mt-8">
              <label className="block text-gray-500 text-sm font-bold ">
                Password:
                <input
                  className="mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength="8"
                  required
                ></input>
              </label>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-8"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCustomer;
