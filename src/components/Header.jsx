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
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSearchSlice";
import { changeLanguage } from "../utils/ConfigSlice";

// import { GrLanguage } from "react-icons/gr";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribing when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="h-30 absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col w-screen overflow-y-hidden sm: md:flex-row justify-between ">
      <img className="h-30 w-44 mx-auto md:mx-0" src={LOGO} alt="netflix logo" />

      {user && (
        <div className="flex w-66 h-30 p-2 gap-4 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {/* <GrLanguage className="h-10 w-10 bg-white" /> */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className="bg-purple-800 h-12 rounded-lg text-white gap-4 p-2 font-bold"
          >
            {showGptSearch ? "Homepage" : "AI Search" }
          </button>
          <HiMiniUserCircle className="w-12 h-12 bg-white gap-4" />

          <button
            onClick={handleSignOut}
            className="bg-red-600 h-12 rounded-lg text-white gap-4 p-2 font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
