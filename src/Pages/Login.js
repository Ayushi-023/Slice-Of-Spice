import React from 'react'
import "../Css/Login.css"
import img from "../Images/Rectangle 69.jpg";
import google from "../Images/Group 84.png";
import logo from "../Images/logo1.png";

const Login = () => {
  return (
    <div>
        <div className="d-flex">
        <div className="col">
            <img src={img} className="img-fluid" alt=""/>
        </div>
        <div className="col mt-5" id='c'>
            <div className="text-center">
                <img src={logo} alt="" className="logo"/>
                <h3 className="mt-5">LOGIN</h3>
                <div className="d-flex flex-column mt-4 i">
                    <input type="email" placeholder="Email" className="mt-3"/>
                    <input type="password" placeholder="Password" className="mt-3"/>
                    <button className="mt-3 email" id='button'>Login with Email</button>
                    <p>_________________________________ <sub>or</sub> _________________________________</p>
                    <button className="mt-3 mb-5 google" id='button' ><img src={google} alt=""/>Continue with Google</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login