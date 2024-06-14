import React from 'react'
import "../Css/Contact.css";
import logo from "../Images/logo.png";
import email from "../Images/email.png";
import call from "../Images/call.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import G from "../Images/G+.png";
import map from "../Images/Rectangle 64.png";

const Contact = () => {
  return (
    <div>
      <div className="ContactUs">
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id='nav'>
                <a className="navbar-brand">
                    <img src={logo} className="img-fluid img" alt="logo"/>
                </a>
                <button className="navbar-toggler" id="navtogle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="navtogle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-right ml-auto">
                        <li className="nav-item py-2">
                            <a className="nav-link text-light" href="/">HOME</a>
                        </li>
                        <li className="nav-item py-2">
                            <a className="nav-link text-light" href="/menu">MENU</a>
                        </li>
                        <li className="nav-item py-2">
                            <a className="nav-link text-light" href="/gallery">GALLERY</a>
                        </li>
                        <li className="nav-item py-2">
                            <a className="nav-link text-light" href="/about">ABOUT US</a>
                        </li>
                        <li className="nav-item py-2">
                            <a className="nav-link text-light" href="/contact">CONTACT US</a>
                        </li>
                        <li className="nav-item py-2">
                            <a id="btn" className="btn text-light" href="/viewcart">View Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1>CONTACTUS</h1>
        </div>
    </div>
    <div className="container text-center" id="contactus">
        <div className="mt-5">
            <h2>GET IN TOUCH WITH US</h2>
            <p>Enim lobortis scelerisque fermentum dui faucibus. Tempor <br className="d-none d-md-block"/> commodo ullamcorper a lacus vestibulum sed arcu non. Magna ac <br className="d-none d-md-block"/> placerat vestibulum lectus mauris.</p>
        </div>
        <div className="container-fluid" id="info">
            <div className="col d-flex flex-column" id="col">
                <input type="text" placeholder="Enter Your Name" className="mt-5"/>
                <input type="email" placeholder="Enter Your Email" className="mt-3"/>
                <input type="number" placeholder="Enter Your Phone" className="mt-3"/>
                <textarea className="mt-3">Enter Your Message</textarea>
                <div><button className="mt-5 mb-5">submit application</button></div>
            </div>
        </div>
    </div>
    <div className="map mt-5 mb-5">
        <img src={map} className="img-fluid" alt=""/>
    </div>
    <div className="container-fluid" id="footer">
        <div className="pt-3">
            <img src={logo} alt=""/>
            <div className="row">
                <div className="col">
                    <h4>WHY SLICE OF SPICE?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                </div>
                <div className="col">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li> &#8594; HOME</li>
                        <li> &#8594; MENU</li>
                        <li> &#8594; GALLERY</li>
                        <li> &#8594; ABOUT US</li>
                        <li> &#8594; CONTACT US</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>OPENING HOURS</h4>
                    <h5>Monday - Saturday</h5>
                    <pre>12:00PM - 10:30PM</pre>
                    <h5>sunday</h5>
                    <pre>12:00PM - 11:30PM</pre>
                </div>
                <div className="col">
                    <h4>GET IN TOUCH</h4>
                    <p>Restaurant, to consequat ipsum nec sagittis sem</p>
                    <p><img src={location} className="img-fluid" alt=""/>Restaurant, Manhattan 1258,New <br className="d-none d-md-block"/> York, USA Lahore</p>
                    <p><img src={call} className="img-fluid" alt=""/>(+1) 234 567 8901</p>
                    <p><img src={email} className="img-fluid" alt=""/>hello@website.com</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid" id="footer-end">
        <div className="d-lg-flex d-sm-block justify-content-between">
            <h5>Copyright © 2016 slice of spice. All Right Reserved</h5>
            <div>
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={G} alt=""/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Contact