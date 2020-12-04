import React, { Component } from "react";
import "../CSS/LoginPage.css";

// Firebase
import { auth, createUserProfileDocument, signInWithGoogle } from "../firebase/firebaseUtils";

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
  constructor(){
    super();

    this.state = {
      displayName:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  }

  handleSubmit = async (event) =>{
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});
    }catch(error){
      console.log(error.message)
    }

    this.setState({
      displayName:'',
      email:'',
      password:'',
      confirmPassword:'',
    })

  }
  handleloginSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email:'',
        password:'',
      })
    }catch(error){
      console.log(error.message);
    }
  }

  handleChange = event =>{
    const {name, value} = event.target;
    this.setState({[name]:value});
  }
  handleloginChange = event =>{
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
      <div className="LoginPage">
        <div className="login-container border">
          <h3>Already have an account?</h3>
          <h1 className="heading">LOGIN</h1>

          <div className="field">
            <div className="label">
              <h2>
                <AiOutlineMail size={35} />
              </h2>
            </div>
            <input 
            placeholder="Enter email id"
            className="input-text"
            name="email"
            value={email}
            onChange={this.handleChange} />
          </div>
          
          <div className="field">
            <div className="label">
              <h2>
                <AiOutlineLock size={35} />
              </h2>
            </div>
            <input
              placeholder="Enter password"
              className="input-text"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="column button-column">
            <button className="button" onClick={this.handleloginSubmit}>LOGIN</button>
            <Link to="/home">
              <button className="button google" onClick={signInWithGoogle}>
                <FcGoogle color="white" size={30} />
                {""} Google Sign in{" "}
              </button>
            </Link>
          </div>
        </div>



{/* Sign up Form */}


        <div className="login-container">
          <h3>Don't have an account?</h3>
          <h1 className="heading">SIGN UP</h1>
          <div className="field">
            <div className="label">
              <h2>
                <AiOutlineMail size={35} />
              </h2>
            </div>
            <input placeholder="Enter email id" 
                   className="input-text"
                   value={email}
                   name="email"
                   onChange={this.handleChange}
                    />
          </div>
          <div className="field">
            <div className="label">
              <h2>
                <AiOutlineUser size={35} />
              </h2>
            </div>
            <input 
            placeholder="Enter username" 
            className="input-text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange} 

            />
          </div>
          <div className="field">
            <div className="label">
              <h2>
                <AiOutlineLock size={35} />
              </h2>
            </div>
            <input
              placeholder="Enter password"
              className="input-text"
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <div className="label">
              <h2>
                <AiOutlineLock size={35} />
              </h2>
            </div>
            <input
              placeholder="Confirm password"
              className="input-text"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>

          <button className="button signup-button" onClick={this.handleSubmit}>SIGN UP</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
