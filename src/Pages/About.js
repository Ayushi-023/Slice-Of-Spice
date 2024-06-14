import React from 'react'
import "../Css/About.css"
import logo from "../Images/logo.png";
import email from "../Images/email.png";
import call from "../Images/call.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import G from "../Images/G+.png";
import twitter2 from "../Images/Group 64.png";
import img from "../Images/Rectangle 47.png";
import t1 from "../Images/team1.png";
import t2 from "../Images/team2.png";
import c1 from "../Images/img1.png";
import c2 from "../Images/img2.png";
import c3 from "../Images/img3.png";
import c4 from "../Images/img4.png";
const About = () => {
  return (
    <div>
    <div className="AboutUs">
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
        </div>
        <div className="heading ">
            <h1>ABOUT US</h1>
        </div>
    </div>
    <div className="mt-5 container-fluid" id="Aboutus-sub">
        <div className=" d-lg-flex d-sm-block justify-content-between">
            <div className="text mt-5">
                <h2>NOTHING TO WORRY ABOUT WITH SLICE OF SPICE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit  lacinia. Aliquam in elementum tellus.</p>
            </div>
            <div>
                <img src={img} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>
    <div className="container mt-5" id="cards">
        <div className="r d-lg-flex d-sm-block text-center">
            <div className="col ">
                <img src={c1} className="img-fluid" alt=""/>
                <h2>Free Delivery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="col ">
                <img src={c2} className="img-fluid" alt=""/>
                <h2>Save Your Time</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="col ">
                <img src={c3} className="img-fluid" alt=""/>
                <h2>Regular Discounts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="col ">
                <img src={c4} className="img-fluid" alt=""/>
                <h2>Variety of Food</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5 pt-5 mb-5 pb-5 team text-center">
        <div>
            <h2>OUR TEAM</h2>
            <p>Enim lobortis scelerisque fermentum dui faucibus. Tempor <br className="d-none d-md-block"/> commodo ullamcorper a lacus vestibulum sed arcu non. Magna <br className="d-none d-md-block"/> ac placerat vestibulum lectus mauris.</p>
        </div>
        <div className="container">
            <div className=" d-lg-flex d-sm-block justify-content-center container pt-2 text-center" id="teams">
                <div className="col mt-3">
                    <img src={t1} className="img-fluid" alt=""/>
                    <h5 className="pt-3">ROXI DALSOME</h5>
                    <div className="d-flex justify-content-center pb-5">
                        <img src={facebook} className="img-fluid" alt=""/>
                        <img src={twitter2} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col mt-3">
                    <img src={t2} className="img-fluid" alt=""/>
                    <h5 className="pt-3">EDGAR JHOLSON</h5>
                    <div className="d-flex justify-content-center pb-5">
                        <img src={facebook} className="img-fluid" alt=""/>
                        <img src={twitter2} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
    </div>
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
                <img src={facebook} className="img-fluid" alt=""/>
                <img src={twitter} className="img-fluid" alt=""/>
                <img src={G} className="img-fluid" alt=""/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About