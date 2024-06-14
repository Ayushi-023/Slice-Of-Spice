import React from 'react'
import "../Css/Gallery.css";
import logo from "../Images/logo.png";
import email from "../Images/email.png";
import call from "../Images/call.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import G from "../Images/G+.png";
import g1 from "../Images/gallery1.png";
import g2 from "../Images/gallery2.png";
import g3 from "../Images/gallery3.png";
import g4 from "../Images/gallery4.png";
import g5 from "../Images/gallery5.png";
import g6 from "../Images/gallery6.png";
import g7 from "../Images/gallery7.png";
import g8 from "../Images/gallery8.png";
import g9 from "../Images/gallery9.png";


const Gallery = () => {
  return (
    <div>
      <div className="Gallery">
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id='nav'>
                <a className="navbar-brand" href="#">
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
            <h1>GALLERY</h1>
        </div>
    </div>
    <div className="container-fluid text-center" id="Gallery-sub">
        <div>
            <h3 className="pt-5">You'll never get tired of viewing</h3>
        </div>
        <div className="images container">
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g1} className="pt-3 img-fluid" alt="" onclick="openLightbox(0)"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g2} className="pt-3 img-fluid" alt="" onclick="openLightbox(1)"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g3} className="pt-3 img-fluid" alt="" onclick="openLightbox(2)"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g4} className="pt-3 img-fluid" alt="" onclick="openLightbox(3)"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g5} className="pt-3 img-fluid" alt="" onclick="openLightbox(4)"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g6} className="pt-3 img-fluid" alt="" onclick="openLightbox(5)"/>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g7} className="pt-3 img-fluid" alt="" onclick="openLightbox(6)"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g8} className="pt-3 img-fluid" alt="" onclick="openLightbox(7)"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={g9} className="pt-2 img-fluid" alt="" onclick="openLightbox(8)"/>
                </div>
            </div>
        </div>
        
        <div id="lightbox" className="lightbox">
            <span className="close" onclick="closeLightbox()">&times;</span>
            <span className="prev" onclick="changeImage(-1)">&#10094;</span>
            <img className="lightbox-content" id="lightbox-img"/>
            <span className="next" onclick="changeImage(1)">&#10095;</span>
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
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={G} alt=""/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Gallery;