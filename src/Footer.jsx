import React from "react";
import "./App.jsx";
const Footer = () => {
  return (
    <>
      <div className="first-footer container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col footer-card mt-5">
            <h5 className="text-center">Shopio</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              vel? Voluptate, asperiores!
            </p>
          </div>
          <div className="col footer-card mt-5">
            <h5 className="text-center">Policy</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Commercial Policy</li>
              <li>Terms of Style</li>
              <li>Product Quality</li>
            </ul>
          </div>
          <div className="col footer-card mt-5">
            <h5 className="text-center">Company</h5>
            <ul>
              <li>Product</li>
              <li>Brand</li>
              <li>FAQ</li>
              <li>Contributer</li>
            </ul>
          </div>
          <div className="col footer-card mt-5">
            <h5 className="text-center">Business</h5>
            <ul>
              <li>Daily Products</li>
              <li>Computer</li>
              <li>Electronics</li>
              <li>Cost of Dev</li>
            </ul>
          </div>
          <div className="col footer-card mt-5">
            <h5 className="text-center">Subscribe</h5>
            <div className="input-group mb-2">
              <input type="email"  className="footer-input form-control" placeholder="Your Email" />
              <button className="btn btn-sm btn-outline-primary">Submit</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              vel? Voluptate, asperiores!
            </p>
          </div>
        </div>
      </div>

      <footer className="footer bg-light">
        <p className="text-center p-2">Copyright&copy; Shopio.com.Ltd, all Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
