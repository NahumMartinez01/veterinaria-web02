import React, { useEffect } from "react";
import useUser from "../context/useUser";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const Login = () => {
  const { isLogginLoading, isLogged, hasLoginError, login, logout } = useUser();

  const [email, handleEmailChange] = useForm();
  const [password, handlepasswordChange] = useForm();

 


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  useEffect(() => {
    if (isLogged) navigate("/home");
  }, [isLogged, navigate]);

  return (
    <div className="bg-white  container-lg mx-auto px-4 w-2/4 max-w-md  rounded-lg mt-32">
      {isLogginLoading && <p>Checking credentials....</p>}

      {/* FORMULARIO */}
      {!isLogginLoading && (
        <div>
          <div className="text-center ">
            <h1 className="text-2xl text-black font-bold pt-6">Sign In</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white  px-8 pt-6 pb-8 mb-4 mt-4 w-full mx-center "
          >
            {!hasLoginError ? (
              <div>
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
                      onChange={handlepasswordChange}
                      minLength="8"
                      required
                    ></input>
                  </label>
                </div>
                
              </div>
            ): (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-500 text-sm font-bold ">
                    Email:
                    <input
                      className="mt-4 appearance-none border border-red-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="mt-4 appearance-none border border-red-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlepasswordChange}
                      minLength="8"
                      required
                    ></input>
                  </label>
                </div>
                <p className="text-red-500 text-sm">credentials are invalid</p>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>

              <Link
                to="/register"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-8"
              >
                Crear Usuario
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
