import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faBell, faCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { userService } from "../service/UserService";
import profile from '../assets/img/profile.jpg'
const Navbar = ({ isSidebarVisible, showsidebar }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        // Fetch user data from the backend
        // const response = await userService.fetchCurrentUser();
        setUser("Thinley Norbu"
          // response.data?.firstname.toUpperCase() +
          //   " " +
          //   response.data?.lastname.toUpperCase()
        );
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div
      className={
        isSidebarVisible
          ? "sticky top-0 z-30 flex h-20 w-screen  flex-row items-center justify-between bg-white px-5 drop-shadow-md sm:w-full"
          : "sticky top-0 z-30 flex h-20 w-screen  flex-row items-center justify-end bg-white  px-5  drop-shadow-md sm:w-full"
      }
    >
      {isSidebarVisible && (
        <div className="bg-red" onClick={showsidebar}>
          <FontAwesomeIcon
            icon={faBars}
            style={{
              fontSize: 16,
              color: "#4d4d4d",
              border: "2px solid #d9d9d9",
              borderRadius: "5px",
              padding: "4px",
            }}
          />
        </div>
      )}
      <div className="flex flex-row items-center gap-3">
        <div className=" relative flex h-9  w-9 flex-row items-center justify-center rounded-full bg-gray-200 text-center">
          <FontAwesomeIcon
            icon={faBell}
            style={{ fontSize: 16, color: "#4d4d4d" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            style={{ fontSize: 10, color: "#ff0000" }}
            className="absolute -top-0.5 right-0"
          />
        </div>
        <div className="hidden  sm:flex sm:flex-col sm:items-end sm:pl-2">
          <h1 className="text-base font-medium">{user}</h1>
          <h2 className="text-xs">Stock Manager</h2>
        </div>
        <div className="flex h-14 w-14 flex-row items-center justify-center rounded-full bg-gray-200 text-center">
          <Link to="/profile">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
