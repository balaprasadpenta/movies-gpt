import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  
  const dispatch = useDispatch();
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const buttonHandling = () => {
    //validating the form data
    const data = validateData(
      email.current.value.trim(),
      password.current.value
    );
    if (!isSigninForm) {
      validateData(fullname.current.value);
    }
    setErrorMessage(data);

    if (data) return;

    if (!isSigninForm) {
      //signup form logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          console.log(setErrorMessage);
        });
    } else {
      // signin form logic
      signInWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignupHandler = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div className="flex">
      <Header />
      <img
        src= {BG_IMAGE}
        alt="bg-image"
        className="h-screen object-cover md:h-screen md:w-screen md:fixed bg-gradient-to-r from-black"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-5/6 md:w-3/12 flex-auto bg-black absolute mx-auto right-0 left-0 p-6 mt-56 text-white rounded-xl bg-opacity-70"
      >
        <h1 className=" text-4xl font-semibold py-8">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 mb-4 flex w-full bg-slate-700 rounded-lg"
        />
        {!isSigninForm ? (
          <input
            ref={fullname}
            type="text"
            placeholder="Enter your name"
            className="p-4 mb-4 flex w-full bg-slate-700 rounded-lg"
          />
        ) : (
          ""
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-6 flex w-full bg-slate-700 border-white rounded-lg"
        />{" "}
        <br />
        <p className="text-red-800 font-bold text-lg py-2">{errorMessage}</p>
        <br /> <br />
        <button
          className="bg-red-800 p-4 m-auto w-full rounded-lg"
          onClick={buttonHandling}
        >
          {isSigninForm ? "Sign in" : "Sign Up"}
        </button>
        {isSigninForm ? (
          <p className="p-6 mt-6 cursor-pointer">
            New to Netflix?
            <b
              className="text-2xl px-2 hover:underline"
              onClick={toggleSignupHandler}
            >
              Sign up now
            </b>
          </p>
        ) : (
          <p className="p-6 mt-6 cursor-pointer">
            Already registered?
            <b
              className="text-2xl px-2 hover:underline"
              onClick={toggleSignupHandler}
            >
              Sign In now
            </b>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
