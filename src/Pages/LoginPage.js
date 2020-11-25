import React, { Component } from 'react'
import '../CSS/LoginPage.css';

// Firebase


// importing icons
import { AiOutlineMail,AiOutlineUser,AiOutlineLock } from 'react-icons/ai';


export class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
            <div className="login-container">
                <div className="field">
                <div className="label">
                    <h2><AiOutlineMail size={35}/></h2>
                    </div>
                    <input placeholder="Enter email id" className="input-text"/>
                </div>
                <div className="field">
                <div className="label">
                    <h2><AiOutlineUser size={35}/></h2>
                    </div>
                    <input placeholder="Enter username" className="input-text"/>
                </div>
                <div className="field">
                <div className="label">
                    <h2><AiOutlineLock size={35}/></h2>
                    </div>
                    <input placeholder="Enter email id" className="input-text"/>
                </div>
                
                <button className="button">
                    Login
                </button>
                    
                
                
            </div>
                
            </div>
        )
    }
}

export default LoginPage
