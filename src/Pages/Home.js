import logo from "../Images/logo.png";
import interior from "../Images/restaurant-interior 1.jpg";
import meeting from "../Images/meeting.png";
import birthday from "../Images/birthday.png";
import wedding from "../Images/wedding.png";
import email from "../Images/email.png";
import call from "../Images/call.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import G from "../Images/G+.png";
import james from "../Images/Ellipse 5.png";
import "../Css/Home.css"
function Home() {
  return (
    <div>
      <div className="container-fluid" id="home">
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
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
                            <a class="nav-link text-light" href="/contact">CONTACT US</a>
                        </li>
                        <li className="nav-item py-2">
                            <a id="btn" class="btn text-light" href="/viewcart">View Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid" id="home-sub">
            <h1 >YES WE HAVE <br class="d-none d-md-block"/><strong>BEST TASTE</strong>  FOR <br class="d-none d-md-block"/> YOU!</h1>
                <p class="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="d-none d-md-block"/> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed <br class="d-none d-md-block"/> dignissim, metus nec fringilla accumsan, risus sem <br class="d-none d-md-block"/> sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <button >See Our Menu</button>
            </div>
        </div>
      </div>
      <div className="container-fluid mt-5" id="AboutUs">
        <div className="Aboutus-sub">
          <div className="card-sub">
            <div className="card text-center">
                <h2>ABOUT US</h2>
                <img src={interior} className="img-fluid py-5"/>
                <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas ,ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna tempor. 
                   <p> Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia</p>
                </p>
                <div className=" mt-5">
                    <button>Read More</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5" id="delivery">
        <div className="delivery-sub text-center py-4 pb-5">
            <div>
                <h2>Delivery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Dictum Est A, <br class="d-none d-md-block"/> mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum <br class="d-none d-md-block"/> tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti <br class="d-none d-md-block"/> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus <br class="d-none d-md-block"/> luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus <br class="d-none d-md-block"/> nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. <br class="d-none d-md-block"/> Aliquam in elementum tellus.
                    <br class="d-none d-md-block"/> Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. <br class="d-none d-md-block"/> Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. <br class="d-none d-md-block"/> Aenean feugiat </p>
            </div>
            <div>
                <button class="mt-4">Order Now</button>
            </div>
        </div>
    </div>
    <div className="container-fluid pt-5" id="bestfor">
        <div className="text-center">
            <div>
                <h2>BEST FOR</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container-fluid"><img src={birthday} class="img-fluid"/></div>
                    <h4>BIRTHDAY</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
                </div>
                <div className="col">
                    <div className="container-fluid"><img src={meeting} class="img-fluid mt-3 pt-5"/></div>
                    <h4>MEETING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
                </div>
                <div className="col">
                    <div className="container-fluid"><img src={wedding} class="img-fluid pt-5"/></div>
                    <h4>WEDDING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-5" id="Serveyou">    
        <div class="serveyou-sub text-center">
            <h3>WE ARE ALWAYS HERE TO SERVE YOU.</h3>
            <div class="row">
                <div class="col">
                    <h1>980+</h1>
                    <p>satisfied customers</p>
                </div>
                <div class="col">
                    <h1>210+</h1>
                    <p>delicious dishes</p>
                </div>
                <div class="col">
                    <h1>7k+</h1>
                    <p>Food Delivered</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5" id="remember">
        <div className="text-center">
            <div>
                <h1>A TASTE YOU'LL REMEMBER</h1>
                <h4>‘’</h4> 
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, <br class="d-none d-md-block"/> mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut <br class="d-none d-md-block"/> interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class <br class="d-none d-md-block"/> aptent taciti sociosqu ad litora torquent</p>
                            <img src={james} alt=""/>
                            <h5>JAMES DE FRANCO</h5>
                        </div>
                        <div className="carousel-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, <br class="d-none d-md-block"/> mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut <br class="d-none d-md-block"/> interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class <br class="d-none d-md-block"/> aptent taciti sociosqu ad litora torquent</p>
                            <img src={james} alt=""/>
                            <h5>JAMES DE FRANCO</h5>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel" role="true" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5" id="signup">
        <div className="text-center">
            <p>Sign up with your name and email to get fresh updates.</p>
            <div className="input row justify-content-center">
                <div className="col-12 col-md-8">
                    <div class="input-group">
                        <input type="email" class="form-control" id="text" placeholder="Email Address"/>
                        <div class="input-group-append">
                            <button class="btn btn-subscribe" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="footer">
        <div class="pt-5">
            <img src={logo} alt=""/>
            <div className="row">
                <div class="col">
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
                    <p><img src={location} class="img-fluid" alt=""/>Restaurant, Manhattan 1258,New <br class="d-none d-md-block"/> York, USA Lahore</p>
                    <p><img src={call} class="img-fluid" alt=""/>(+1) 234 567 8901</p>
                    <p><img src={email} class="img-fluid" alt=""/>hello@website.com</p>
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
  );
}
export default Home;
