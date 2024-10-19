import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
       navigate("/error")
      });
  };
  return (
    <div className="h-30 absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen overflow-y-hidden ">
      <img
        className="h-30 w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
      
      {user && (<div className="flex w-44 h-30 p-2 gap-4">
        <HiMiniUserCircle className="w-12 h-12 bg-white gap-4" />

        <button
          onClick={handleSignOut}
          className="bg-red-600 h-12 rounded-lg text-white gap-4 p-2 font-bold"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
