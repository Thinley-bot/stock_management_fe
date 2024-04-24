import React, { useState } from "react";
import { userService } from "../service/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link , useNavigate} from "react-router-dom";
import logo from '../assets/img/logo.png'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.login({ email, password });
      console.log("Login successful", response.data);
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed, please check your credentials");
      console.error("Login failed", error);
    }
  };

  return (
    <div className="bg-[url('/src/assets/img/background.png')] flex flex-row items-center justify-center h-screen w-full">
          <div className="bg-gray-900 px-20 pt-10 pb-20 bg-opacity-10 w-[30%] h-[60%] shadow-lg shadow-black">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
              {error && (
                <p className="text-center text-red-500">Login failed, try again!</p>
              )}
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={logo}

                  alt="company logo"
                  className="h-28 w-28"
                />
                <h1 className="text-2xl font-bold">LOGIN</h1>
              </div>
              <label>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;&nbsp;&nbsp;Email
              </label>
              <input
                className="rounded border-2 border-gray-300 px-4 py-1"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>
                <FontAwesomeIcon icon={faLock} />
                &nbsp;&nbsp;&nbsp;Password
              </label>
              <input
                className="rounded border-2 border-gray-300 px-4 py-1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
              </button>
              <div className="mt-4 flex items-center justify-center">
                <Link to="/register">
                  Register&nbsp; <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </form>
          </div>
        </div>
  );
}

export default Login;
