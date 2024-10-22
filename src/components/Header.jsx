import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
       navigate("/error")
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribing when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="h-30 absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen overflow-y-hidden ">
      <img
        className="h-30 w-44 "
        src={LOGO}
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
