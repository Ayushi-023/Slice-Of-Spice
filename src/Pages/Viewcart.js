import React, { useState, useEffect } from 'react';
import "../Css/Viewcart.css";
import logo from "../Images/logo.png";
import email from "../Images/email.png";
import call from "../Images/call.png";
import location from "../Images/location.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import G from "../Images/G+.png";

const Viewcart = () => {
  const [cart, setCart] = useState([]);
  const [editQuantities, setEditQuantities] = useState({});

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
  }, []);

  const updateCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const editItem = (index) => {
    const newCart = [...cart];
    newCart[index].isEditing = true;
    setCart(newCart);
    setEditQuantities({ ...editQuantities, [index]: newCart[index].quantity });
  };

  const saveItem = (index) => {
    const newCart = [...cart];
    const newQuantity = parseInt(editQuantities[index], 10); // Ensure quantity is parsed as integer
    newCart[index].quantity = newQuantity;
    newCart[index].totalPrice = newCart[index].price * newQuantity;
    newCart[index].isEditing = false;
    updateCart(newCart);
    setEditQuantities({ ...editQuantities, [index]: undefined });
  };

  const cancelEdit = (index) => {
    const newCart = [...cart];
    newCart[index].isEditing = false;
    setCart(newCart);
    setEditQuantities({ ...editQuantities, [index]: undefined });
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    updateCart(newCart);
  };

  const renderCart = () => {
    if (cart.length === 0) {
      return <p className="text-center">Your cart is empty.</p>;
    }
    return cart.map((item, index) => (
      <div className="cart container-fluid" key={index}>
        <div className="card mt-2" id="carts" data-index={index}>
          <div className="d-lg-flex d-sm-block">
            <img src={item.image} className="img-fluid py-3" alt={item.name} />
            <div className="head">
              <h3 className="h3">{item.name}</h3>
              {item.isEditing ? (
                <p className="quantity">
                  <input
                    type="number"
                    value={editQuantities[index]}
                    onChange={(e) => {
                      const newQuantities = { ...editQuantities, [index]: e.target.value };
                      setEditQuantities(newQuantities);
                    }}
                    min="1"
                    className="quantity-input"
                  />
                </p>
              ) : (
                <p className="quantity">
                  <span className="item-quantity">{item.quantity}</span>
                </p>
              )}
            </div>
            <div className="d-flex">
              {item.isEditing ? (
                <>
                  <button className="btn save-btn" onClick={() => saveItem(index)}>Save</button>
                  <button className="btn cancel-btn" onClick={() => cancelEdit(index)}>Cancel</button>
                </>
              ) : (
                <>
                  <button className="btn edit-btn" onClick={() => editItem(index)}>Edit</button>
                  <button className="btn btn-remove remove-btn" onClick={() => removeItem(index)}>Remove</button>
                </>
              )}
            </div>
            <p className="price">Price: $<span className="item-price">{item.price * item.quantity}</span></p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div id="viewcart">
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
      <div id="cart" className="container pt-5">
        <div className="text-center">
          <div className="view-head">
            <h1>Shopping Cart</h1>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-5">
            <div id="cartItems" className="row text-center">
              {renderCart()}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="footer">
        <div className="pt-5">
          <img src={logo} alt="" />
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
              <p><img src={location} className="img-fluid" alt="" />Restaurant, Manhattan 1258,New <br className="d-none d-md-block" /> York, USA Lahore</p>
              <p><img src={call} className="img-fluid" alt="" />(+1) 234 567 8901</p>
              <p><img src={email} className="img-fluid" alt="" />hello@website.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="footer-end">
        <div className="d-lg-flex d-sm-block justify-content-between">
          <h5>Copyright © 2016 slice of spice. All Right Reserved</h5>
          <div>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={G} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewcart;


