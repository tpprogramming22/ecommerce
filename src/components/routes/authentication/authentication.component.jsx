import { useEffect, useState } from "react";

import { getRedirectResult } from "firebase/auth";

import './authentication.styles.scss';

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "../../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

import SignUpForm from "../../sign-up/sign-up.component";
import SignInForm from "../../sign-in/sign-in.component";

const Authentication = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(response.user)
      }
      
    };
    fetchData()
  }, []);


  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
