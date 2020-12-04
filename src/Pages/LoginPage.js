import React, { Component } from "react";
import "../CSS/LoginPage.css";

// Firebase
import { auth, createUserProfileDocument, signInWithGoogle } from "../firebase/firebaseUtils";

// Components
import {Signin} from '../Components/SigninComponent';
import {Signup} from '../Components/SignupComponent';

// React Routing
import { Link } from "react-router-dom";

// importing icons
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineGoogle,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export class LoginPage extends Component {


  render() {

    return (
      <div className="LoginPage">
        <Signin />



{/* Sign up Form */}


       <Signup />
      </div>
    );
  }
}

export default LoginPage;
