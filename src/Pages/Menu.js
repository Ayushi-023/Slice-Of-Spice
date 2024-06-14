import React, { useEffect, useState } from 'react';
import '../Css/Menu.css';
import logo from "../Images/logo.png";
import email from "../Images/email.png";
import call from "../Images/call.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import G from "../Images/G+.png";
import b1 from "../Images/Burger1.png";
import b2 from "../Images/Burger2.png";
import b3 from "../Images/Burger3.png";
import p1 from "../Images/pizza1.png";
import p2 from "../Images/pizza2.png";
import p3 from "../Images/pizza3.png";
import s1 from "../Images/sandwich1.png";
import s2 from "../Images/sandwich2.png";
import s3 from "../Images/sandwich3.png";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const itemName = item.querySelector("h3").textContent;
        const itemDescription = item.querySelector("p").textContent;
        const itemImage = item.querySelector("img").src;
        const itemPrice = item.querySelector(".price").textContent.replace('$', '');

        setSelectedItem({
          name: itemName,
          description: itemDescription,
          price: parseFloat(itemPrice),
          image: itemImage
        });

        setIsModalOpen(true);
      });
    });

    return () => {
      menuItems.forEach((item) => {
        item.replaceWith(item.cloneNode(true));
      });
    };
  }, []);

  const addToCartHandler = () => {
    if (!selectedItem) return;

    const quantity = parseInt(document.getElementById("quantity").value);
    const itemToAdd = {
      ...selectedItem,
      quantity,
      totalPrice: selectedItem.price * quantity,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(itemToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));

    setIsModalOpen(false);
  };

  return (
    <div>
      <section id="menu">
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light" id='nav'>
              <a className="navbar-brand">
                <img src={logo} className="img-fluid img" alt="logo" />
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
        </div>
      </section>
      <section className="container" id="menu-sub">
        <div className="text-center container">
          <div id="menu-head">
            <h1>OUR MENU</h1>
            <h3>BURGERS</h3>
          </div>
        </div>
        <div className="r d-lg-flex d-sm-block text-center">
          <div className="col card mt-3 menu-item">
            <img src={b1} className="img-fluid py-3" alt="Veggie burger" />
            <h3>Veggie burger</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
          <div className="col card mt-3 menu-item">
            <img src={b2} className="img-fluid py-3" alt="Wild salmon burger" />
            <h3>Wild salmon burger</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
          <div className="col card mt-3 menu-item">
            <img src={b3} className="img-fluid py-3" alt="Bean burger" />
            <h3>Bean burger</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
        </div>
        <p className="text-center py-5"><a href="#">View More</a></p>
        <h3 className="text-center">PIZZAS</h3>
        <div className="r d-lg-flex d-sm-block text-center">
          <div className="col card mt-3 menu-item">
            <img src={p1} className="img-fluid py-3" alt="Neapolitan Pizza" />
            <h3>Neapolitan Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
          <div className="col card mt-3 menu-item">
            <img src={p2} className="img-fluid py-3" alt="Chicago Pizza" />
            <h3>Chicago Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
          <div className="col card mt-3 menu-item">
            <img src={p3} className="img-fluid py-3" alt="Detroit Pizza" />
            <h3>Detroit Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
        </div>
        <p className="text-center py-5"><a href="#">View More</a></p>
        <h3 className="text-center">SANDWICHES</h3>
        <div className="r d-lg-flex d-sm-block text-center">
          <div className="col card mt-3 menu-item">
            <img src={s1} className="img-fluid py-3" alt="Neapolitan Pizza Sandwich" />
            <h3>Neapolitan Pizza Sandwich</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
          <div className="col card mt-3 menu-item">
            <img src={s2} className="img-fluid py-3" alt="Chicago Pizza Sandwich" />
            <h3>Chicago Pizza Sandwich</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
          <div className="col card mt-3 menu-item">
            <img src={s3} className="img-fluid py-3" alt="Detroit Pizza Sandwich" />
            <h3>Detroit Pizza Sandwich</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <p className="price">$70.00</p>
          </div>
        </div>
        <p className="text-center py-5"><a href="#">View More</a></p>
      </section>
      <section className="container-fluid" id="footer">
        <div className="pt-5">
          <img src={logo} alt="logo" />
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
              <h5>Sunday</h5>
              <pre>12:00PM - 11:30PM</pre>
            </div>
            <div className="col">
              <h4>GET IN TOUCH</h4>
              <p>Restaurant, to consequat ipsum nec sagittis sem</p>
              <p><img src={location} className="img-fluid" alt="Location" />Restaurant, Manhattan 1258,New <br className="d-none d-md-block" /> York, USA Lahore</p>
              <p><img src={call} className="img-fluid" alt="Call" />(+1) 234 567 8901</p>
              <p><img src={email} className="img-fluid" alt="Email" />hello@website.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid" id="footer-end">
        <div className="d-lg-flex d-sm-block justify-content-between">
          <h5>Copyright © 2016 slice of spice. All Right Reserved</h5>
          <div>
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={G} alt="Google Plus" />
          </div>
        </div>
      </section>

      {isModalOpen && selectedItem && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="menuModalLabel" aria-hidden="true" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" onClick={() => setIsModalOpen(false)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div id="modalContent">
                  <h3>{selectedItem.name}</h3>
                  <img src={selectedItem.image} className="img-fluid py-3" alt={selectedItem.name} />
                  <p>{selectedItem.description}</p>
                  <p className="price">${selectedItem.price}</p>
                </div>
                <div className="form-group d-flex">
                  <input type="number" id="quantity" className="form-control" defaultValue="1" min="1" />
                  <button type="button" className="btn btn-primary" onClick={addToCartHandler}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
